# Testes 
Este documento descreve os testes unitários implementados para verificar a funcionalidade do sistema de configuração do banco de dados do `deploy-buddy`.

## Sumário:
- [Testes](#testes)
  - [Sumário:](#sumário)
  - [Testes Implementados](#testes-implementados)
    - [Teste de banco de dados](#teste-de-banco-de-dados)
      - [`TestLoadEnv`](#testloadenv)
      - [`TestBuildDSN`](#testbuilddsn)
      - [`TestConnectDB`](#testconnectdb)
    - [Testes de backend](#teste-de-banco-de-dados)
      - [`JWTAuthMiddleware`](#jwtauthmiddleware)
      - [`TestSlackService_SendMessage`](#testslackservice)
      - [`TestUserRepository`](#testuserrepository)
      - [`TestUserHandler`](#testuserhandler)


## Testes Implementados

### Teste de banco de dados

Os testes garantem que o ambiente, a string de conexão (DSN) e a conexão com o banco de dados estão configurados corretamente. Para esse teste funcionar o banco de dados Postgres tem que estar rodando, seja localmente, em cloud, ou usando Docker, e especificando as configurações no arquivo `.env`.

#### `TestLoadEnv`
**Objetivo:** Verificar se o arquivo `.env` é carregado corretamente.

**Método:**
- Utiliza a biblioteca `github.com/joho/godotenv` para carregar as variáveis de ambiente do arquivo `.env` localizado no diretório especificado.
- Em caso de erro ao carregar o arquivo, o teste falha e reporta o erro.
    ```go
    func TestLoadEnv(t *testing.T) {
        if err := godotenv.Load("../../.env"); err != nil {
            t.Fatalf("Error loading .env file: %s", err)
        }
    }
    ```

#### `TestBuildDSN`
**Objetivo:** Assegurar que a string de conexão com o banco de dados (DSN) seja construída corretamente.

**Método:**
- Define as variáveis de ambiente necessárias para construir a DSN.
- Chama a função `BuildDSN` do pacote `config`, que concatena as variáveis de ambiente em uma string de conexão.
- Verifica se a string de conexão obtida corresponde à string esperada.
    ```go
    func TestBuildDSN(t *testing.T) {
        expectedDSN := "host=localhost user=postgres password=postgres dbname=postgres port=5432 sslmode=disable TimeZone=America/Sao_Paulo"
        os.Setenv("DB_HOST", "localhost")
        os.Setenv("DB_USER", "postgres")
        os.Setenv("DB_PASSWORD", "postgres")
        os.Setenv("DB_NAME", "postgres")
        os.Setenv("DB_PORT", "5432")
        os.Setenv("DB_SSLMODE", "disable")
        os.Setenv("DB_TIMEZONE", "America/Sao_Paulo")

        dsn := config.BuildDSN()
        if dsn != expectedDSN {
            t.Errorf("DSN was incorrect, got: %s, want: %s", dsn, expectedDSN)
        }
    }
    ```

#### `TestConnectDB`
**Objetivo:** Testar a conexão com o banco de dados usando as configurações especificadas.

**Método:**
- Configura as variáveis de ambiente necessárias para a conexão.
- Utiliza a função `ConnectDB` do pacote `config` para estabelecer a conexão com o banco de dados.
- Verifica se a conexão é estabelecida sem erros e se o objeto de conexão é obtido corretamente.
- Fecha a conexão após o teste.
    ```go 
    func TestConnectDB(t *testing.T) {
        os.Setenv("DB_HOST", "localhost")
        os.Setenv("DB_USER", "postgres")
        os.Setenv("DB_PASSWORD", "postgres")
        os.Setenv("DB_NAME", "postgres")
        os.Setenv("DB_PORT", "5432")
        os.Setenv("DB_SSLMODE", "disable")
        os.Setenv("DB_TIMEZONE", "America/Sao_Paulo")

        db, err := config.ConnectDB()
        if err != nil {
            t.Fatalf("Failed to connect to database: %s", err)
        }

        sqlDB, err := db.DB()
        if err != nil {
            t.Fatalf("Failed to retrieve SQL DB from GORM: %s", err)
        }
        if err := sqlDB.Close(); err != nil {
            t.Fatalf("Failed to close database connection: %s", err)
        }
    }
    ```

### Testes de backend
#### `JWTAuthMiddleware`
**Objetivo:** Verificar se o middleware de autenticação JWT rejeita adequadamente requisições não autenticadas e permite as autenticadas.

**Método:**
- Configura o middleware para extrair e validar o token JWT das requisições.
- Verifica se o token válido permite o acesso ao próximo manipulador, enquanto um token inválido resulta em uma resposta de não autorizado.

    ```go
    func JWTAuthMiddleware(next http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            tokenString := r.Header.Get("Authorization")

            // Removes the "Bearer " prefix
            if len(tokenString) < 7 {
                http.Error(w, "Unauthorized", http.StatusUnauthorized)
                return
            }
            tokenString = tokenString[7:]

            token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
                if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
                    return nil, jwt.ErrSignatureInvalid
                }
                return []byte("secret"), nil
            })

            if err != nil || !token.Valid {
                render.Status(r, http.StatusUnauthorized)
                render.JSON(w, r, map[string]string{"error": "Unauthorized", "message": err.Error()})
                return
            }

            if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
                // Supondo que o ID do usuário está armazenado na claim "userID"
                userID, err := claims["id"].(string)
                if !err {
                    render.Status(r, http.StatusUnauthorized)
                    render.JSON(w, r, map[string]string{"error": "Unauthorized", "message": "Invalid user ID"})
                    return
                }

                // Adiciona o ID do usuário ao contexto da requisição
                ctx := context.WithValue(r.Context(), UserContextKey, userID)
                r = r.WithContext(ctx)

                next.ServeHTTP(w, r)
            } else {
                render.Status(r, http.StatusUnauthorized)
                render.JSON(w, r, map[string]string{"error": "Unauthorized", "message": "Invalid token"})
                return
            }
        })
    }
    ```

#### `TestSlackService_SendMessage`
**Objetivo:** Testar a capacidade de enviar mensagens para o Slack.

**Método:**
- Utiliza uma instância do serviço Slack configurada com as chaves obtidas do ambiente.
- Envia uma mensagem de aprovação e verifica se a operação ocorre sem erros.

    ```go
    func TestSlackService_SendMessage(t *testing.T) {
        godotenv.Load("../../.env")

        t.Run("send message to slack", func(t *testing.T) {
            s := utils.SlackService{
                Keys: os.Getenv("SLACK_KEYS"),
            }
            u := model.User{
                ID:         uuid.New(),
                CreatedAt:  time.Now(),
                UpdatedAt:  time.Now(),
                DeletedAt:  gorm.DeletedAt{},
                Name:       "name",
                Email:      "email",
                Password:   "password",
                IsApproved: true,
            }
            err := s.AskApproval(u)

            assert.Equal(t, err, nil)
        })
    }
    ```

#### `TestUserRepository`
**Objetivo:** Verificar se as operações do repositório de usuários são realizadas corretamente.

**Método:**
- Configura uma base de dados em memória usando GORM com o driver SQLite.
- Cria uma instância falsa do serviço Slack para ser usada pelo repositório.
- Executa operações CRUD no repositório de usuários e verifica se estas são realizadas corretamente.

    ```go
    func TestUserRepository(t *testing.T) {
        godotenv.Load("../../.env")

        // Configure a database in memory for testing
        db, err := gorm.Open(sqlite.Open("file::memory:?cache=shared"), &gorm.Config{})
        if err != nil {
            t.Fatalf("Erro ao abrir o banco de dados em memória: %v", err)
        }

        // Migrate tables to the database
        err = db.AutoMigrate(&model.User{})
        if err != nil {
            t.Fatalf("Erro ao migrar as tabelas: %v", err)
        }

        // Create a fake Slack service instance
        slackService := utils.NewSlackService()

        // Create user repository
        repo := repository.NewUserRepository(db, slackService)

        // Test to Create function
        t.Run("Create", func(t *testing.T) {
            user := &model.User{
                Name:     "John Doe",
                Email:    "john@example.com",
                Password: "password123",
            }
            err := repo.Create(user)
            assert.NoError(t, err)

            var createdUser model.User
            err = db.First(&createdUser, "email = ?", "john@example.com").Error
            assert.NoError(t, err)
            assert.Equal(t, user.Name, createdUser.Name)
            assert.NotEmpty(t, createdUser.Password)
        })

        // Test to FindAll function
        t.Run("FindAll", func(t *testing.T) {
            users, err := repo.FindAll()
            assert.NoError(t, err)
            assert.Greater(t, len(users), 0)
        })

        // Test to FindByID function
        t.Run("FindByID", func(t *testing.T) {
            user := &model.User{
                Name:     "Jane Doe",
                Email:    "jane@example.com",
                Password: "password123",
            }

            db.Create(user)

            foundUser, err := repo.FindByID(user.ID)
            assert.NoError(t, err)
            assert.Equal(t, user.Name, foundUser.Name)
        })

        // Test to Update function
        t.Run("Update", func(t *testing.T) {
            user := &model.User{
                Name: "John Updated",
            }
            err := repo.Update(user, false)
            assert.NoError(t, err)
        })

        // Test to Delete function
        t.Run("Delete", func(t *testing.T) {
            user := &model.User{
                Email: "user_to_delete@example.com",
            }
            db.Create(user)
            err := repo.Delete(user.ID)
            assert.NoError(t, err)
        })

        // Test to Approve function
        t.Run("Approve", func(t *testing.T) {
            user := &model.User{
                Name: "User To Approve",
            }
            db.Create(user)
            success, err := repo.Approve(user.ID)
            assert.NoError(t, err)
            assert.True(t, success)
        })

        // Test to Decline function
        t.Run("Decline", func(t *testing.T) {
            user := &model.User{
                Name: "User To Decline",
            }
            db.Create(user)
            success, err := repo.Decline(user.ID)
            assert.NoError(t, err)
            assert.True(t, success)
        })
    }
    ```

#### `TestUserHandler`
**Objetivo:** Assegurar que os manipuladores HTTP para operações de usuário funcionem corretamente.

**Método:**
- Configura um roteador Chi e associa as rotas aos manipuladores correspondentes.
- Cria requisições HTTP para cada operação (criar, obter, deletar, aprovar, recusar usuário) e verifica se as respostas são as esperadas.

    ```go
    func TestUserHandler(t *testing.T) {
        godotenv.Load("../../.env")

        // Configure a database in memory for testing
        db, err := gorm.Open(sqlite.Open("file::memory:?cache=shared"), &gorm.Config{})
        assert.NoError(t, err, "Erro ao abrir o banco de dados em memória")

        // Migrate tables to the database
        err = db.AutoMigrate(&model.User{})
        assert.NoError(t, err, "Erro ao migrar tabelas")

        // Create a fake SlackService instance
        slackService := utils.NewSlackService()
        assert.NotNil(t, slackService, "SlackService não deve ser nulo")

        // Create User repository
        repo := repository.NewUserRepository(db, slackService)
        assert.NotNil(t, repo, "O repositório não deve ser nulo")

        // Create User handler
        userHandler := handler.NewUserHandler(repo)
        assert.NotNil(t, userHandler, "O manipulador não deve ser nulo")

        // Configure the Chi router to test the HTTP handlers
        r := chi.NewRouter()
        r.Post("/users", userHandler.CreateUser)
        r.Get("/users", userHandler.GetAllUsers)
        r.Get("/users/{id}", userHandler.GetUser)
        r.Delete("/users/{id}", userHandler.DeleteUser)
        r.Post("/users/{id}/approve", userHandler.ApproveUser)
        r.Post("/users/{id}/decline", userHandler.DeclineUser)

        // Teste to CreateUser function
        t.Run("CreateUser", func(t *testing.T) {
            userRequest := model.CreateUserRequest{
                Name:     "John Doe",
                Email:    "john.doe@example.com",
                Password: "password123",
            }

            reqBody, err := json.Marshal(userRequest)
            assert.NoError(t, err, "Erro ao codificar o corpo da requisição")

            req := httptest.NewRequest("POST", "/users", bytes.NewBuffer(reqBody))
            req.Header.Set("Content-Type", "application/json")

            rr := httptest.NewRecorder()

            r.ServeHTTP(rr, req)

            assert.Equal(t, http.StatusCreated, rr.Code)

            var createdUser model.User
            err = json.NewDecoder(rr.Body).Decode(&createdUser)
            assert.NoError(t, err, "Erro ao decodificar o usuário criado")

            assert.Equal(t, userRequest.Name, createdUser.Name)
            assert.Equal(t, userRequest.Email, createdUser.Email)
            assert.NotEmpty(t, createdUser.ID, "ID do usuário não deve estar vazio")
        })

        // Test to GetAllUsers function
        t.Run("GetAllUsers", func(t *testing.T) {
            users := []model.User{
                {
                    Name:     "User 1",
                    Email:    "user1@example.com",
                    Password: "password1",
                },
                {
                    Name:     "User 2",
                    Email:    "user2@example.com",
                    Password: "password2",
                },
            }

            for _, user := range users {
                err := repo.Create(&user)
                assert.NoError(t, err, "Erro ao criar usuário")
            }

            req := httptest.NewRequest("GET", "/users", nil)
            rr := httptest.NewRecorder()

            r.ServeHTTP(rr, req)

            assert.Equal(t, http.StatusOK, rr.Code, "A resposta deve ser 200 OK")

            var returnedUsers []model.User
            err := json.NewDecoder(rr.Body).Decode(&returnedUsers)
            assert.NoError(t, err, "Erro ao decodificar usuários retornados")

            assert.GreaterOrEqual(t, len(returnedUsers), len(users), "O número de usuários retornados deve ser maior ou igual ao número de usuários criados")
        })

        // Test to GetUser function
        t.Run("GetUser", func(t *testing.T) {
            user := model.User{
                Name:     "John Doe",
                Email:    "john.doe@example.com",
                Password: "password123",
            }
            err := repo.Create(&user)
            assert.NoError(t, err, "Erro ao criar usuário para teste")

            req := httptest.NewRequest("GET", "/users/"+user.ID.String(), nil)
            rr := httptest.NewRecorder()

            r.ServeHTTP(rr, req)

            assert.Equal(t, http.StatusOK, rr.Code, "A resposta deve ser 200 OK")

            var returnedUser model.User
            err = json.NewDecoder(rr.Body).Decode(&returnedUser)
            assert.NoError(t, err, "Erro ao decodificar o usuário retornado")

            assert.Equal(t, user.Name, returnedUser.Name, "Os nomes devem ser iguais")
            assert.Equal(t, user.Email, returnedUser.Email, "Os emails devem ser iguais")
        })

        // Teste to DeleteUser function
        t.Run("DeleteUser", func(t *testing.T) {
            user := model.User{
                Name:     "John Doe",
                Email:    "john.doe@example.com",
                Password: "password123",
            }
            err := repo.Create(&user)
            assert.NoError(t, err, "Erro ao criar usuário para teste")

            req := httptest.NewRequest("DELETE", "/users/"+user.ID.String(), nil)
            rr := httptest.NewRecorder()

            r.ServeHTTP(rr, req)

            assert.Equal(t, http.StatusOK, rr.Code, "A resposta deve ser 200 OK")

            var response map[string]string
            err = json.NewDecoder(rr.Body).Decode(&response)
            assert.NoError(t, err, "Erro ao decodificar a mensagem de resposta")
            assert.Equal(t, "User deleted", response["message"], "A mensagem deve ser 'User deleted'")
        })

        // Test to ApproveUser function
        t.Run("ApproveUser", func(t *testing.T) {
            user := model.User{
                Name:     "John Doe",
                Email:    "john.doe@example.com",
                Password: "password123",
            }
            err := repo.Create(&user)
            assert.NoError(t, err, "Erro ao criar usuário para teste")

            req := httptest.NewRequest("POST", "/users/"+user.ID.String()+"/approve", nil)
            rr := httptest.NewRecorder()

            r.ServeHTTP(rr, req)

            assert.Equal(t, http.StatusOK, rr.Code, "A resposta deve ser 200 OK")

            var response map[string]string
            err = json.NewDecoder(rr.Body).Decode(&response)
            assert.NoError(t, err, "Erro ao decodificar a mensagem de resposta")
            assert.Equal(t, "User approved", response["message"], "A mensagem deve ser 'User approved'")
        })

        // Test to DeclineUser function
        t.Run("DeclineUser", func(t *testing.T) {
            user := model.User{
                Name:     "John Doe",
                Email:    "john.doe@example.com",
                Password: "password123",
            }
            err := repo.Create(&user)
            assert.NoError(t, err, "Erro ao criar usuário para teste")

            req := httptest.NewRequest("POST", "/users/"+user.ID.String()+"/decline", nil)
            rr := httptest.NewRecorder()

            r.ServeHTTP(rr, req)

            assert.Equal(t, http.StatusOK, rr.Code, "A resposta deve ser 200 OK")

            var response map[string]string
            err = json.NewDecoder(rr.Body).Decode(&response)
            assert.NoError(t, err, "Erro ao decodificar a mensagem de resposta")
            assert.Equal(t, "User declined", response["message"], "A mensagem deve ser 'User declined'")
        })
    }
    ```
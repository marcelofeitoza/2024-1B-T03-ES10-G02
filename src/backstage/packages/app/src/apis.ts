import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
  errorApiRef,
  fetchApiRef,
  githubAuthApiRef,
  discoveryApiRef,
} from '@backstage/core-plugin-api';
import {
  graphQlBrowseApiRef,
  GraphQLEndpoints,
} from '@backstage/plugin-graphiql';
import { AuthProxyDiscoveryApi } from './AuthProxyDiscoveryApi';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: discoveryApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => AuthProxyDiscoveryApi.fromConfig(configApi),
  }),
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  createApiFactory({
    api: graphQlBrowseApiRef,
    deps: {
      errorApi: errorApiRef,
      fetchApi: fetchApiRef,
      githubAuthApi: githubAuthApiRef,
    },
    factory: ({ errorApi, fetchApi, githubAuthApi }) =>
      GraphQLEndpoints.from([
        GraphQLEndpoints.github({
          id: 'github',
          title: 'GitHub',
          errorApi,
          fetchApi,
          githubAuthApi,
        }),
      ]),
  }),
  ScmAuth.createDefaultApiFactory(),
];

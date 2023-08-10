/* eslint "@typescript-eslint/explicit-module-boundary-types": "off" */
import { useMutation, useQuery, UseQueryResult } from 'react-query';
import { http, ResourceSearch } from '../http/http';
import { CacheKeys } from './cache-configuration';

export const useApi = (): UseQueryResult<any> => {
  return useQuery(CacheKeys.API, () => http.baseApi());
};

export const useResources = (
  resource: string,
  enabled: boolean,
): UseQueryResult<ResourceSearch> => {
  return useQuery(
    [CacheKeys.INITIAL_RESOURCE, resource],
    () => http.baseRouteApi(resource),
    {
      enabled,
    },
  );
};

export const useApiUrl = (
  url: string,
  enabled: boolean,
): UseQueryResult<any> => {
  return useQuery([CacheKeys.RESOURCE, url], () => http.baseRouteApi(url), {
    enabled,
  });
};

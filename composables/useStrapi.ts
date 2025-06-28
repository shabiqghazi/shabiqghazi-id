import { getHttpClient } from "~/lib/httpClient";
import type { Any } from "~/types/global";
import type { IStrapiQueryParams } from "~/types/strapi";
import { buildQuery } from "~/utilities/build-query.util";

export const useStrapi = () => {
  const httpClient = getHttpClient();
  const config = useRuntimeConfig();

  // Find single entry
  const findOneById = async <T = Any>(
    contentType: string,
    id: string | number,
    params: IStrapiQueryParams = {}
  ): Promise<T> => {
    const query = buildQuery(params);
    const endpoint = `/${contentType}/${id}${query ? `?${query}` : ""}`;

    return httpClient(endpoint);
  };

  // Find multiple entries
  const find = async <T = Any>(
    contentType: string,
    params: IStrapiQueryParams = {}
  ): Promise<T> => {
    const query = buildQuery(params);
    const endpoint = `/${contentType}${query ? `?${query}` : ""}`;

    return httpClient(endpoint);
  };

  // Get media URL helper
  const getMediaUrl = (url: string): string => {
    if (url.startsWith("http")) return url;
    return `${config.public.apiMediaURL}${url}`;
  };

  return {
    find,
    findOneById,
    buildQuery,
    getMediaUrl,
  };
};

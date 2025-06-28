import type { IStrapiSingleResponse } from "~/types/strapi";
import { useStrapi } from "./useStrapi";
import type { IStrapiAbout } from "~/types/strapi-about";

export const useAbout = () => {
  const { find } = useStrapi();

  const getAbout = () => {
    return find<IStrapiSingleResponse<IStrapiAbout>>("about", {
      populate: "*",
    });
  };

  return {
    getAbout,
  };
};

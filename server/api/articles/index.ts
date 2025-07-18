import { useArticles } from "~/composables/useArticles";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { getArticles } = useArticles();

  try {
    const response = await getArticles(query);

    const { data } = response;

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw createError({
        status: 500,
        message: "Unknown error",
      });
    }
  }
});

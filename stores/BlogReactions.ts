import { defineStore } from "pinia";
import { createPinia } from "pinia";

const pinia = createPinia();

type Article = {
  id: number;
  reaction: string;
};
// @ts-ignore: Unreachable code error
export const useBlogReactionsStore = defineStore("BlogReactions", {
  state: () => {
    return {
      articles: [] as Article[],
    };
  },
  getters: {},
  actions: {
    getArticleReaction(articleId: number) {
      return this.articles.find((a) => a.id === articleId);
    },
    addOrUpdateArticle(article: Article) {
      console.log("article", article);

      const existingArticle = this.getArticleReaction(article.id);
      if (existingArticle) {
        existingArticle.reaction = article.reaction;
      } else {
        this.articles.push(article);
      }
    },
  },
  persist: {
    storage: persistedState.cookies,
    // only save isCookiesSet as cookie
  },
});

export default pinia;

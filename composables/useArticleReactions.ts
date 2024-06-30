// composables/useArticleReactions.js
import { useState } from "#app";

export const useArticleReactions = () => {
  const reactions = useState("reactions", () => []);

  const setReactions = (newReactions) => {
    reactions.value = newReactions;
  };

  const getArticleReactions = (articleId) => {
    return reactions.value.find((article) => article.id === articleId);
  };

  const toggleReaction = (articleId, reaction) => {
    const article = reactions.value.find((article) => article.id === articleId);
    if (article) {
      article.reaction = reaction;
    }
  };

  return {
    reactions,
    setReactions,
    getArticleReactions,
    toggleReaction,
  };
};

export const calcReadTime = (text: any) => {
  const wordsPerMinute = 200;
  const textLength = text.split(" ").length;
  return Math.ceil(textLength / wordsPerMinute);
};

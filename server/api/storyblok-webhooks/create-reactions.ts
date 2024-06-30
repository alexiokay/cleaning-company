import { Redis } from "@upstash/redis";

type Reactions = {
  like: number;
  super: number;
  laugh: number;
  wow: number;
  angry: number;
  sad: number;
};

const createNewReactions = (id: number) => {
  const NewReactions: Reactions = {
    like: 0,
    super: 0,
    laugh: 0,
    wow: 0,
    angry: 0,
    sad: 0,
  };
  return NewReactions;
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("body", body);
  const { storyId } = body;

  const config = useRuntimeConfig();

  const redis = new Redis({
    url: config.redis.url,
    token: config.redis.token,
  });

  const key = `article:${storyId}:reactions`;
  const doesArticleExist = redis.exists(key);
  console.log("doesArticleExist", doesArticleExist);

  if (!doesArticleExist) {
    const obj = createNewReactions(storyId);
    redis.hmset(key, obj);
  }
});

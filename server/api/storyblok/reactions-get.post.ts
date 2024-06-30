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
  const { storyId, reactions } = body;

  const config = useRuntimeConfig();

  const client = new Redis({
    url: config.redis.url,
    token: config.redis.token,
  });

  const key = `article:${storyId}:reactions`;

  console.log("key", key);

  let doesArticleExist = false;
  await client.exists(key).then((result) => {
    console.log("result:", result);
    if (result === 1) {
      doesArticleExist = true;
    } else {
      doesArticleExist = false;
    }
  });
  console.log("doesArticleExist", doesArticleExist);

  let currentReactions: any = {};

  if (!doesArticleExist) {
    const obj = createNewReactions(storyId);
    client.hmset(key, obj);
  } else {
    await client.hgetall(key).then((result) => {
      currentReactions = result;
    });
  }

  console.log("currentReactions", currentReactions);

  return currentReactions;
});

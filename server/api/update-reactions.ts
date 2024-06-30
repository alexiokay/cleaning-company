import { Redis } from "@upstash/redis";

type Article = {
  id: number;
  reaction: string;
};

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
  const { storyId, reaction, increment } = body;

  const config = useRuntimeConfig();

  const redis = new Redis({
    url: config.redis.url,
    token: config.redis.token,
  });

  console.log("storyId", storyId);

  const key = `article:${storyId}:reactions`;
  const doesArticleExist = redis.exists(key);

  if (!doesArticleExist) {
    const obj = createNewReactions(storyId);
    redis.hmset(key, obj);

    console.log("New article created in Redis");
  } else {
    if (increment) {
      redis.hincrby(key, reaction, 1);
      console.log("Incremented reaction in Redis");
    } else {
      redis.hincrby(key, reaction, -1);
      console.log("Incremented reaction in Redis");
    }
  }

  const story = redis.hgetall(key);

  return story;
});

export default defineNuxtRouteMiddleware((to) => {
  const isDebug = useRuntimeConfig().public.DEBUG === "true" ? true : false;
  console.log(isDebug);
  console.log("404-if-debug.global.ts: Redirecting to /404");
  if (to.path.startsWith("/shop") && isDebug === false) {
    return navigateTo("/404");
  }
});

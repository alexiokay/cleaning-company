export default defineNuxtRouteMiddleware((to, from) => {
  // skip middleware on client side entirely
  if (process.client) return;
  const event = useRequestEvent();
  console.log(event.node.req.headers.host);
  console.log("test");
});

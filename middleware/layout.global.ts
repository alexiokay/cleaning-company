import { useUserStore } from "@/stores/User";
import { useCookiesStore } from "@/stores/CookiesSettings";

export default defineNuxtRouteMiddleware((to) => {
  const route = useRoute();
  const cookiesStore = useCookiesStore();
  if (to.path.startsWith("/account")) {
    setPageLayout("accounts");
    console.log("set layout to accounts");
  } else if (to.path.startsWith("/v1")) {
    setPageLayout("default");
  } else {
    setPageLayout("default2");
    console.log("set layout to default");
  }
});

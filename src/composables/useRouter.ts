import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";

interface RouterComposable {
  route: RouteLocationNormalizedLoaded;
}

export default function useRouter(): RouterComposable {
  const route = useRoute();
  return {
    route
  };
}

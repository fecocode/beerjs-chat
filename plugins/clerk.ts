import { clerkPlugin } from 'vue-clerk'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  nuxtApp.vueApp.use(clerkPlugin, {
    publishableKey: runtimeConfig.public.CLERK_PUBLISHABLE_KEY,
  });
});
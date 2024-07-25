// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY!,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN!,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL!,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID!,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET!,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID!,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID!,

      CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY!,
    },

    FIRESTORE_SERVICE_ACCOUNT_KEY: process.env.FIRESTORE_SERVICE_ACCOUNT_KEY!,
    FIRESTORE_DATABASE_ID: process.env.FIRESTORE_DATABASE_ID!,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY!,
  }
})

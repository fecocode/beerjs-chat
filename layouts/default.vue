<template>
  <div class="max-w-[600px] w-full h-screen flex flex-col items-center mx-auto">
    <nav class="flex w-full items-center p-3 justify-between border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <UAvatar src="/logo.svg" />
        <span>Beerjs Chat</span>
      </div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <UButton label="Ingresar" :to="{ name: 'signin' }" />
      </SignedOut>
    </nav>
    <main class="w-full h-full flex flex-col items-center">
      <slot />
    </main>
    <UNotifications />
  </div>
</template>

<script lang="ts" setup>
import { SignedIn, UserButton, SignedOut } from 'vue-clerk';
</script>
<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex-1 py-5">
      <AppMessageDisplayer
      />
    </div>
    <SignedIn>
      <AppMessageEditor />
    </SignedIn>
  </div>
</template>
<script lang="ts" setup>
import { SignedIn } from 'vue-clerk';
</script>
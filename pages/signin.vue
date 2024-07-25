<template>
  <div>
    <SignIn />
  </div>
</template>
<script lang="ts" setup>
import { SignIn } from 'vue-clerk';

// @ts-ignore
definePageMeta({
  layout: 'auth'
})
</script>
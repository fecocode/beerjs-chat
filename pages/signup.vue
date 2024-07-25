<template>
  <div v-if="showView" class="mt-5">
    <SignUp />
  </div>
</template>
<script lang="ts" setup>
import { SignUp, useAuth } from 'vue-clerk';
import { computed } from 'vue';

const auth = useAuth()

const showView = computed(() => {
  return auth.isLoaded
})
</script>




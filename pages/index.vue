<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex-1 relative">
      <div class="absolute inset-0 py-5 space-y-5 overflow-y-auto">
        <AppMessageDisplayer
          v-for="record in records"
          :text="record.message"
          :author-username="record.author_username"
        />
      </div>
    </div>
    <SignedIn>
      <AppMessageEditor />
    </SignedIn>
  </div>
</template>
<script lang="ts" setup>
import { SignedIn } from 'vue-clerk';
import { collection, onSnapshot } from 'firebase/firestore'

const { $firebase } = useNuxtApp()

const records = ref<{message: string, author_username: string}[]>([])
// @ts-ignore
const unsubscribe = onSnapshot(collection($firebase.firestore, 'messages'), (snapshot) => {
  // @ts-ignore
  records.value = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
})

onUnmounted(() => {
  unsubscribe()
})
</script>
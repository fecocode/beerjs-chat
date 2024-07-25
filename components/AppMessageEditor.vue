<template>
  <div class="flex p-3 space-x-3">
    <UInput class="flex-1" v-model="message" />
    <UButton
      :disabled="!canSendMessage"
      :loading="sendingMessage"
      icon="i-heroicons-arrow-long-up-16-solid"
      :ui="{ rounded: 'rounded-full' }"
      @click="handleSendMessageClick"
    />
  </div>
</template>
<script lang="ts" setup>
const message = ref('')
const sendingMessage = ref(false)

const canSendMessage = computed(() => !!message.value.trim().length)
const toast = useToast()


async function handleSendMessageClick() {
  if(!canSendMessage.value || sendingMessage.value) {
    return
  }

  try {
    sendingMessage.value = true
    await $fetch('/api/message', {
      method: 'POST',
      body: {
        message: message.value,
      }
    })
    message.value = ''
  } catch (_) {
    toast.add({
      color: 'red',
      icon: 'i-heroicons-x-mark',
      title: 'Ocurrió un error al enviar',
      description: 'Intentalo nuevamente'
    })
  } finally {
    sendingMessage.value = false
  }
}
</script>
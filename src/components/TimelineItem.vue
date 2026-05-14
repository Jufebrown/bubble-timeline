<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  itemData: TimelineItem
}>()

const showTitle = ref(false)

const determineIcon = (itemType: string) => {
  switch (itemType) {
    case 'Doom':
      return '💀'

    case 'Launch':
      return '🚀'

    case 'Funding':
      return '💲'

    case 'Model Release':
      return '🔖'

    default:
      return
  }
}
</script>

<template>
  <div class="item" @click="showTitle = !showTitle">{{ determineIcon(itemData.type) }}</div>
  <span class="title" v-if="showTitle">{{ itemData.title }}{{ itemData.type }}</span>
</template>

<style scoped>
.item {
  height: 1.5em;
  width: 1.5em;
  border: 1px solid #222;
  border-radius: 50%;
  background-color: #222;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ddd;
}

.title {
  color: #222;
}
</style>

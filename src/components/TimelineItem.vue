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
  <div class="item" @click="showTitle = !showTitle">
    {{ determineIcon(itemData.type) }}
  </div>
  <div class="title" v-if="showTitle">{{ itemData.title }}</div>
</template>

<style scoped>
.item {
  height: 1.75em;
  width: 1.75em;
  border: 1px solid #222;
  border-radius: 50%;
  background-color: #222;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ddd;
  margin-bottom: 0.25em;
}

.title {
  color: #ddd;
  display: block;
  position: absolute;
  background-color: #222;
  padding: 0 5px;
  border-radius: 0.35em;
}
</style>

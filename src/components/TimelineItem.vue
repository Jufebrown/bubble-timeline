<script setup lang="ts">
defineProps<{
  itemData: TimelineItem
  extendMonth: boolean
}>()

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

    case 'Fail':
      return '💩'

    case 'WTF':
      return '⁉️'

    case 'Circle Jerk':
      return '🦑'

    case 'Data Centers':
      return '🏭'

    case 'Environment':
      return '🌱'

    default:
      return ''
  }
}
</script>

<template>
  <div class="item">
    <span class="icon">{{ determineIcon(itemData.type) }}</span>
    <span class="title" v-if="extendMonth">{{ itemData.title }}</span>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ddd;
  margin-bottom: 0.25em;
  justify-content: flex-start;
}

.icon {
  height: 1.75em;
  width: 1.75em;
  border: 1px solid #222;
  border-radius: 50%;
  background-color: #222;
  text-align: center;
}

.title {
  color: #ddd;
  background-color: #222;
  padding: 0 5px;
  border-radius: 0.35em;
  position: relative;
  filter: opacity(75%);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: max-content;
  z-index: 10;
  text-align: center;
  margin: 0 0 0 0.35em;
}

.title::after {
  content: ' ';
  position: absolute;
  top: 50%;
  left: -10px;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent #222 transparent transparent;
}
</style>

<script setup lang="ts">
defineProps<{
  title?: string
  details?: string
}>()
</script>

<template>
  <div class="item">$</div>
</template>

<style scoped>
.item {
  height: 1.25em;
  width: 1.25em;
  border: 1px solid #222;
  border-radius: 50%;
  background-color: #222;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

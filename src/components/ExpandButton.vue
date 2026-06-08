<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'

const timelineStore = useTimelineStore()
</script>

<template>
  <button class="expand-button" @click="timelineStore.extendMonths = true">
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="#eee"
      stroke="#eee"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>expand-horizontal-solid</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="icons_Q2" data-name="icons Q2">
            <g>
              <path
                d="M30.6,28.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l5.9-6a1.9,1.9,0,0,0,0-2.8l-5.9-6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L33.2,22H14.8l2.6-2.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-5.9,6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L14.8,26H33.2Z"
              ></path>
              <path d="M42,6V42a2,2,0,0,0,4,0V6a2,2,0,0,0-4,0Z"></path>
              <path d="M6,42V6A2,2,0,0,0,2,6V42a2,2,0,0,0,4,0Z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </button>
</template>

<style scoped>
.expand-button {
  background-color: #555;
  border-radius: 5px 0 0 5px;
  border-right-width: 0;
  border: 2px solid #555;
  cursor: pointer;
}
</style>

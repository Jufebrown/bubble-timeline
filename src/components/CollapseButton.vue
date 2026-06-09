<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'

const timelineStore = useTimelineStore()
</script>

<template>
  <button
    class="collapse-button"
    @click="timelineStore.collapseMonths = !timelineStore.collapseMonths"
  >
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
        <title>collapse-horizontal</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Q3_icons" data-name="Q3 icons">
            <g>
              <path
                d="M32.6,22.6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L38.8,26H44a2,2,0,0,0,0-4H38.8l2.6-2.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2Z"
              ></path>
              <path
                d="M15.4,25.4a1.9,1.9,0,0,0,0-2.8l-5.9-6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L9.2,22H4a2,2,0,0,0,0,4H9.2L6.6,28.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2Z"
              ></path>
              <path d="M26,6V42a2,2,0,0,0,4,0V6a2,2,0,0,0-4,0Z"></path>
              <path d="M22,42V6a2,2,0,0,0-4,0V42a2,2,0,0,0,4,0Z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </button>
</template>

<style scoped>
.collapse-button {
  background-color: #555;
  border: 2px solid #555;
  cursor: pointer;
}
</style>

<script setup lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
</script>
<template>
  <div class="relative">
    <div class="absolute z-0 top-0 left-0 w-full h-full bg-purple"></div>
    <div class="bg-[#ddf443] relative z-10 w-full hover:translate-x-12"><slot></slot></div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      hello: 'masthave'
    }
  },

  setup() {}
})
</script>
<style lang="scss"></style>

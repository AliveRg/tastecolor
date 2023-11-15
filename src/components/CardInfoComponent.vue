<script setup lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
</script>
<template>
  <div class="relative group m-4">
    <div
      class="absolute z-0 top-0 left-0 w-full h-full rounded-lg"
      :style="'background-color: #' + color + ';'"
    ></div>
    <div
      class="bg-[#C8D2C4] relative z-10 w-full group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:shadow-xl transitionSetting rounded-lg"
    >
      <div
        class="md:group-hover:-translate-x-2 group-hover:shadow-text_dd group-hover:-translate-y-2 transitionSetting rounded-lg"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      hello: 'masthave'
    }
  },
  props: {
    color: String
  },
  setup() {}
})
</script>
<style lang="scss" scoped>
.transitionSetting {
  transition: all 0.2s ease-in-out;
}

.group:hover .group-hover\:shadow-text_dd {
  text-shadow: 1px 1px 2px #00000030;
}
</style>

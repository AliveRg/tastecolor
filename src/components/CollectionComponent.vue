<script setup lang="ts">
import { ref, onMounted, defineComponent } from 'vue'

import { vIntersectionObserver } from '@vueuse/components'

const isVisible = ref(false)

function onIntersectionObserver([{ isIntersecting }]: any) {
  isVisible.value = isIntersecting
}
</script>
<template>
  <div
    class="bg-img transitionSetting translateHidden group relative flex items-center justify-center"
    :class="{ 'translate-x-[10%]': right, translateVisible: isVisible, '-translate-x-[10%]': left }"
    v-intersection-observer="onIntersectionObserver"
  >
    <div
      class="text_inner transitionSettingLight relative z-10 max-w-[405px] scale-75 text-[#fff] opacity-0 group-hover:scale-100 group-hover:opacity-100 flex flex-col gap-[78px]"
    >
      <div class="main_text flex w-full items-start text-[32px]">
        <p class="font-semibold">Новая коллекция пуховиков этой зимой!</p>
      </div>
      <div class="main-text text-[24px] flex w-full items-center ml-[100px]">
        <p>
          Выбери свой стиль и присоединяйся к семье «TASTE&COLOR»! Неповторимы дизайн и эргономика,
          превосходящая воображение
        </p>
      </div>
      <div
        class="main-text text-[24px] flex w-full items-center"
        style="text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.74)"
      >
        <p>Присмотреться к коллекции</p>
      </div>
    </div>
    <div
      class="inner_img absolute left-0 top-0 z-0 h-full w-full"
      :style="{ backgroundImage: `url('../src/images/${imgPath}')` }"
    ></div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      isVisible: Boolean,
      onIntersectionObserver: Object
    }
  },
  props: {
    title: String,
    comtent: String,
    left: Boolean,
    right: Boolean,
    imgPath: String,
    linkPath: String
  },
  setup() {}
})
</script>
<style lang="scss">
.main_text {
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.inner_img {
  z-index: 0;
  background-position: center;
  background-size: 110%;
  transition: all 0.2s ease-in-out;
}

.text_inner:hover ~ .inner_img {
  background-size: 120%;
  filter: brightness(60%);
}

.inner_img:hover {
  background-size: 120%;
  filter: brightness(60%);
}

.transitionSetting {
  transition: all 0.5s ease-in-out;
}

.transitionSettingLight {
  transition: all 0.2s ease-in-out;
}

.translateHidden {
  opacity: 0;
}

.translateVisible {
  opacity: 1;
  transform: scale(0);
  transform: translateX(0);
}

.bg-img {
  width: 100%;
  height: 50vw;
}
</style>

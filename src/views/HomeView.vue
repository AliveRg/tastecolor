<template>
  <main>
    <section class="section_1 mb-[87px]">
      <div class="flex flex-col gap-[20px] bg-black pt-[20px] overflow-hidden">
        <div class="flex justify-between gap-[20px]">
          <Collection :left="true" :img-path="'photo_2023-10-11 01.48.58.jpeg'"></Collection>
          <Collection :right="true" :img-path="'photo_2023-10-11 04.54.00.jpeg'"></Collection>
        </div>
      </div>
      <div class="w-screen">
        <video autoplay loop muted ref="videoRef">
          <source src="@/images/blackhole.mp4" type="video/mp4" />
          black hole in spase
        </video>
      </div>

      <div class="flex justify-between gap-[20px] bg-black overflow-hidden">
        <Collection :left="true" :img-path="'photo_2023-10-11 05.08.29.jpeg'"></Collection>
        <Collection :right="true" :img-path="'photo_2023-10-11 05.28.19.jpeg'"></Collection>
      </div>
    </section>
    <section class="section_2">
      <div class="max-w-[477px]">
        <CardInfo>
          <div class="p-[25px] pt-[44px]">maxthave</div>
        </CardInfo>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import Collection from '@/components/CollectionComponent.vue'
import CardInfo from '@/components/CardInfoComponent.vue'
export default defineComponent({
  data() {
    return {
      videoPause: false,
      currentTimeVideo: 0
    }
  },
  setup() {},
  methods: {
    video(el: any) {
      var scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
      let vid: any
      vid = this.$refs.videoRef
      let pers = scrollY / (scrollHeight / 1.5 / 100)
      vid.currentTime = (vid.duration / 100) * pers
      vid.play()
    }
  },
  mounted() {
    this.$nextTick(function () {
      let el = document.querySelector('.video')
      let scroll = window.addEventListener('scroll', this.video)
      this.video(el)
    })
  },
  components: {
    Collection,
    CardInfo
  }
})
</script>

<style lang="scss" scoped></style>

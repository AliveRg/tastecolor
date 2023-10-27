<template>
  <main>
    <section class="section_1 mb-[87px]">
      <div class="flex flex-col gap-[20px] overflow-hidden bg-black pt-[20px]">
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

      <div class="flex justify-between gap-[20px] overflow-hidden bg-black">
        <Collection :left="true" :img-path="'photo_2023-10-11 05.08.29.jpeg'"></Collection>
        <Collection :right="true" :img-path="'photo_2023-10-11 05.28.19.jpeg'"></Collection>
      </div>
    </section>
    <section class="section_2 mx-auto mb-[150px] flex flex-col gap-[120px] xl:max-w-[1196px]">
      <div class="flex items-start justify-between">
        <div class="max-w-[477px]">
          <CardInfo :color="'7e5bef'">
            <div class="main_text flex flex-col gap-[20px] p-[25px] pt-[44px]">
              <p class="mb-[150px] text-[40px] font-bold">
                ABOUT <br />
                US
              </p>
              <p class="text-center text-[32px] font-semibold uppercase">taste&color</p>
              <p class="text-justify text-[20px] font-light">
                Бренд в котором каждый надет что-то для себя. Это не просто бренд одежды, это
                источник вдохновения и возможность выразить свой индивидуальный стиль в самых лучших
                аспектах моды и элегантности.
              </p>
            </div>
          </CardInfo>
        </div>
        <div class="max-w-[533px]">
          <CardInfo :color="'B14F4F'">
            <div class="main_text flex flex-col gap-[20px] p-[25px] pt-[44px]">
              <p class="text-start text-[32px] font-semibold">
                Требования для покупателей "taste&color":
              </p>
              <p class="text-justify text-[20px] font-light">
                Обязанность №1 - Носить с удовольствием: В противном случае, разве это не занавеска
                в гостиной? <br />
                Не забыть почувствовать себя королевой/королем: Ведь кто еще, как не ты, заслуживает
                этого? <br />
                Избегать скучных моментов: Одежда "taste&color" предназначена для того, чтобы каждый
                день был мини-модным показом. <br />
                Сиять яркими красками даже в серых буднях: Главное - не поглотить офисный дресс-код
                своим шикарным стилем. <br />
                Превратить обычный день в феерию стиля: Помните, мир - это Ваш подиум, дорогие
                покупатели! <br />
                Не останавливаться на достигнутом: Ведь у нас каждая новая коллекция - как новая
                страница в истории твоего стиля!
              </p>
            </div>
          </CardInfo>
        </div>
      </div>
      <div class="relative flex w-full justify-end pr-[120px]">
        <img
          class="absolute -left-[5%] -top-[40%] max-w-[609px]"
          style="box-shadow: 13px 14px 27px 0px rgba(0, 0, 0, 0.5)"
          src="@/images/photo_2023-10.jpeg"
          alt=""
        />
        <div class="max-w-[545px]">
          <CardInfo :color="'F3A352'">
            <div class="main_text flex flex-col gap-[20px] p-[25px] pt-[44px]">
              <p class="text-start text-[32px] font-semibold">
                Обязанности бренда одежды taste&color перед вами:
              </p>
              <p class="text-justify text-[20px] font-light">
                Поставлять высокое качество: "taste&color" обязан предоставлять потребителям одежду
                высочайшего качества, соответствующую премиальным стандартам. <br />
                Следить за последними тенденциями: Бренд должен быть в курсе последних модных
                течений, чтобы предлагать потребителям современные и стильные коллекции.
                <br />
                Обеспечивать комфорт: Каждая модель должна обеспечивать комфорт носки, чтобы
                потребители чувствовали себя уверенно в любой ситуации. <br />
                Поддерживать экологические стандарты: "taste&color" должен быть ответственным
                брендом, следящим за воздействием своей деятельности на окружающую среду.
              </p>
            </div>
          </CardInfo>
        </div>
      </div>
    </section>
    <section class="section_3 relative mx-auto xl:max-w-[1196px]">
      <div class="flex flex-col">
        <template v-for="item in cross" :key="item.id">
          <div class="flex items-center justify-between" v-if="item.active">
            <div class="not_main_text group/buybtn">
              <p class="text-[48px]">Cales <span class="text-[64px]">&</span></p>
              <div
                class="transitionSetting flex min-h-[442px] rounded-[25px] bg-black group-hover/buybtn:bg-wight p-[11px] text-[48px]"
              >
                <p
                  class="text-wight group-hover/buybtn:text-black"
                  style="writing-mode: vertical-lr; text-orientation: upright"
                >
                  {{ item.name }}
                </p>
                <div class="flex flex-col justify-between">
                  <p
                    class="transitionSetting bg-wight group-hover/buybtn:bg-black group-hover/buybtn:text-wight w-min rotate-180 rounded-[55px] px-[24px] py-[43px] group-hover/buybtn:scale-105"
                    style="writing-mode: vertical-lr; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    buy now
                  </p>
                  <p class="text-wight transitionSetting group-hover/buybtn:text-black">
                    {{ item.prise }}$
                  </p>
                </div>
              </div>
            </div>
            <div class="relative w-[588px]">
              <div class="h-full w-full">
                <img
                  class="transitionSetting absolute -z-10 animate-[spin_2s_ease-in-out_forwards]"
                  :class="{ grayscale: grayscale }"
                  src="@/images/vinil.webp"
                  alt=""
                />
                <img
                  class="transitionSettingStrong relative z-0"
                  :class="{
                    'rotate-[20deg]': item.rotate,
                    'rotate-[0deg]': !item.rotate
                  }"
                  :src="'../src/images/' + item.img[activeImg]"
                  alt=""
                />
              </div>
            </div>
            <div class="">
              <div class="flex flex-col gap-[44px]">
                <div
                  class="group flex h-[104px] w-[104px] items-center justify-center overflow-hidden rounded-[29px] border-[2px] border-[#000]"
                >
                  <div
                    class="transitionSetting h-[59px] w-[59px] rounded-full bg-[#CE4B4B] group-hover:h-[150%] group-hover:w-[150%]"
                    @click="switchColor(1)"
                  ></div>
                </div>
                <div
                  class="group flex h-[104px] w-[104px] items-center justify-center overflow-hidden rounded-[29px] border-[2px] border-[#000]"
                >
                  <div
                    class="transitionSetting h-[59px] w-[59px] rounded-full bg-black group-hover:h-[150%] group-hover:w-[150%]"
                    @click="switchColor(2)"
                  ></div>
                </div>
                <div
                  class="group flex h-[104px] w-[104px] items-center justify-center overflow-hidden rounded-[29px] border-[2px] border-[#000]"
                  @click="switchColor(3)"
                >
                  <div
                    class="transitionSetting h-[59px] w-[59px] rounded-full bg-[#F3D3AF] group-hover:h-[150%] group-hover:w-[150%]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div
          class="mb-[100px] mt-[37px] flex items-center gap-[37px]"
          @mouseenter="rotateEnter()"
          @mouseleave="rotateLeave()"
        >
          <div class="w-[176px] rounded-lg grid grid-cols-4 grid-rows-2 gap-y-[10px]">
            <div class="w-full h-[10px] bg-[#F3A352] rounded-l-md"></div>
            <div class="w-full h-[10px] bg-[#F3D3AF]"></div>
            <div class="w-full h-[10px] bg-[#B14F4F]"></div>
            <div class="w-full h-[10px] bg-[#FD865E] rounded-r-md"></div>
            <div
              class="w-full h-[10px] bg-black rounded-md transitionSetting"
              :class="{
                'col-start-1 col-end-1': activeItem == 0,
                'col-start-2 col-end-2': activeItem == 1,
                'col-start-3 col-end-3': activeItem == 2,
                'col-start-4 col-end-4': activeItem == 3
              }"
            ></div>
          </div>
          <template v-for="item in cross" :key="item.id">
            <div class="flex" v-show="!item.active" @click="switchactive(item.id)">
              <div
                class="relative h-[126px] w-[126px] rounded-l-md"
                :style="'  background-color: #' + item.color"
              >
                <img
                  :src="'../src/images/' + item.img['first']"
                  alt=""
                  class="top-1/5 ] absolute -translate-x-6 -rotate-[20deg] scale-[140%]"
                />
              </div>
              <div
                class="relative h-[126px] w-[195px] rounded-r-md"
                :style="'  background-color: #' + item.colorOpacity"
              >
                <div class="main_text absolute px-[10px] pt-[5px] text-[20px]">
                  <p class="font-semibold uppercase" style="letter-spacing: 2.5px">
                    calse & <br />
                    <span class="text-wight -ml-[8px] rounded-[13px] bg-black px-[8px] py-[4px]">
                      {{ item.name }}</span
                    >
                    <br />
                    {{ item.height }}
                  </p>
                </div>
                <div class="flex h-full w-full items-end justify-end">
                  <p class="buyNow m-[10px] p-[4px]">buy now</p>
                </div>
              </div>
            </div>
          </template>
        </div>
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
      activeImg: 'first',
      activeItem: 0,
      videoPause: false,
      currentTimeVideo: 0,
      ratateActive: false,
      grayscale: true,
      cross: [
        {
          id: 0,
          prise: 229,
          name: 'Casual',
          img: {
            first: 'shose.webp',
            second: 'shose3.webp',
            thrih: 'shose2.webp'
          },
          color: 'F3A352',
          colorOpacity: 'F3A3524D',
          height: 'short',
          active: true,
          rotate: false
        },
        {
          id: 1,
          prise: 319,
          name: 'Rowds',
          img: {
            first: 'Обувьдляходьбы2.webp',
            second: 'Обувьдляходьбы22.webp',
            thrih: 'Обувьдляходьбы23.webp'
          },
          color: 'F3D3AF',
          colorOpacity: 'F3D3AF4D',
          height: 'long',
          active: false,
          rotate: true
        },
        {
          id: 2,
          prise: 199,
          name: 'AllIn',

          img: {
            first: 'Обувьдляходьбы12.webp',
            second: 'Обувьдляходьбы13.webp',
            thrih: 'Обувьдляходьбы.webp'
          },
          color: 'B14F4F',
          colorOpacity: 'B14F4F4D',
          height: 'long',
          active: false,
          rotate: true
        },
        {
          id: 3,
          prise: 259,
          name: 'Circles',

          img: {
            first: 'Обувьдляходьбы3.webp',
            second: 'Обувьдляходьбы32.webp',
            thrih: 'Обувьдляходьбы33.webp'
          },
          color: 'FD865E',
          colorOpacity: 'FD865E4D',
          height: 'short',
          active: false,
          rotate: true
        }
      ]
    }
  },

  setup() {},
  watch: {
    activeItem(newQuestion) {
      this.grayscale = false

      setTimeout(() => {
        this.grayscaleActive()
      }, 2000)
    }
  },
  methods: {
    grayscaleActive() {
      this.grayscale = true
    },
    switchactive(id: number) {
      for (let index = 0; index < this.cross.length; index++) {
        const element = this.cross[index]
        if ((element.active = true)) {
          element.active = false
          element.rotate = true
        }
      }

      this.cross[id].active = true
      setTimeout(() => {
        this.ratate(id)
      }, 100)
      this.activeItem = id
    },
    ratate(id: number) {
      this.cross[id].rotate = false
    },
    rotateEnter() {
      for (let index = 0; index < this.cross.length; index++) {
        const element = this.cross[index]
        if ((element.rotate = true)) {
          setTimeout(() => {
            this.hoverRotate(element.rotate)
          }, 200)
        }
      }
    },
    switchColor(color: Number) {
      if (color == 1) {
        this.activeImg = 'first'
        console.log(this.activeImg)
      }
      if (color == 2) {
        this.activeImg = 'second'
        console.log(this.activeImg)
      }
      if (color == 3) {
        this.activeImg = 'thrih'
        console.log(this.activeImg)
      }
    },
    rotateLeave() {
      for (let index = 0; index < this.cross.length; index++) {
        const element = this.cross[index]
        if ((element.rotate = false)) {
          setTimeout(() => {
            this.hoverRotate(element.rotate)
          }, 200)
        }
      }
    },

    hoverRotate(rotate: Boolean) {
      rotate = !rotate
    },

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

<style lang="scss" scoped>
.main_text {
  color: #332f2d;
  font-family: Montserrat;
}

.buyNow {
  border-radius: 15px;
  border: 3px solid #000;
  background: rgba(43, 140, 58, 0.08);

  color: #000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Wellfleet;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 121.023%;
  /* 24.205px */
  letter-spacing: -1px;
  text-transform: uppercase;
}

.not_main_text {
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-family: Wellfleet;
  text-transform: uppercase;
}

.backplace {
  background-image: url('@/images/vinil.webp');
  background-size: cover;
}

.transitionSetting {
  transition: all 0.3s ease-out;
}
.transitionSettingStrong {
  transition: all 0.3s ease-out;
}
</style>

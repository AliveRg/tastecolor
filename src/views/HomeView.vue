<template>
  <main>
    <section class="section_1 pb-[87px] bg-black relative">
      <div class="flex flex-col gap-[20px] overflow-hidden py-[20px]">
        <div class="flex flex-col md:flex-row justify-between gap-[20px] overflow-hidden z-10">
          <Collection
            @openForm="openForm(4)"
            :left="true"
            :img-path="'photo_2023-10-11 01.48.58.png'"
          ></Collection>
          <div
            :class="forms[4] ? 'block' : 'hidden'"
            @click.self="openForm(4)"
            class="fixed top-0 left-0 z-[100] backdrop:blur-xl w-screen h-screen bg-black/30 flex items-center justify-center"
          >
            <Forms :title="'Получить прайс-лист'"></Forms>
          </div>
          <Collection
            @openForm="openForm(5)"
            :right="true"
            :img-path="'photo_2023-10-11 04.54.00.png'"
          ></Collection>
          <div
            :class="forms[5] ? 'block' : 'hidden'"
            @click.self="openForm(5)"
            class="fixed top-0 left-0 z-[100] backdrop:blur-xl w-screen h-screen bg-black/30 flex items-center justify-center"
          >
            <Forms :title="'Получить прайс-лист'"></Forms>
          </div>
        </div>
      </div>
      <video autoplay loop muted ref="videoRef" class="sticky top-[15px] bottom-[15px] -z-0">
        <source src="/assets/blackhole.mp4" type="video/mp4" />
        black hole in spase
      </video>

      <div
        class="flex flex-col md:flex-row justify-between gap-[20px] overflow-hidden py-[20px] z-10"
      >
        <Collection
          @openForm="openForm(6)"
          :left="true"
          :img-path="'photo_2023-10-11 05.08.29.png'"
        ></Collection>
        <div
          :class="forms[6] ? 'block' : 'hidden'"
          @click.self="openForm(6)"
          class="fixed top-0 left-0 z-[100] backdrop:blur-xl w-screen h-screen bg-black/30 flex items-center justify-center"
        >
          <Forms :title="'Получить прайс-лист'"></Forms>
        </div>
        <Collection
          @openForm="openForm(7)"
          :right="true"
          :img-path="'photo_2023-10-11 05.28.19.png'"
        ></Collection>
        <div
          :class="forms[7] ? 'block' : 'hidden'"
          @click.self="openForm(7)"
          class="fixed top-0 left-0 z-[100] backdrop:blur-xl w-screen h-screen bg-black/30 flex items-center justify-center"
        >
          <Forms :title="'Получить прайс-лист'"></Forms>
        </div>
      </div>
    </section>

    <div class="flex justify-center w-full bg-wight relative z-10">
      <section
        class="section_2 mb-[150px] flex flex-col-reverse md:flex-row lg:flex-col lg:gap-[120px] xl:max-w-[1196px] justify-center bg-wight"
      >
        <div
          class="order-2 lg:order-1 flex flex-col md:flex-col-reverse lg:flex-row items-center lg:items-start justify-between"
        >
          <div class="w-full flex relative items-start md:items-center overflow-hidden">
            <img
              class="absolute block md:hidden top-[40%] left-[50%] max-w-[245px]"
              style="box-shadow: 13px 14px 27px 0px rgba(0, 0, 0, 0.5)"
              src="/assets/photo_2023-10.jpeg"
              alt=""
            />
            <div class="max-w-[245px] lg:max-w-[312px] xl:max-w-[477px]">
              <CardInfo :color="'7e5bef'">
                <div
                  class="main_text flex flex-col gap-[20px] p-[10px] lg:p-[25px] pt-[23px] lg:pt-[44px]"
                >
                  <p
                    class="md:mb-[50px] lg:mb-[100px] md:text-[24px] lg:text-[32px] xl:text-[40px] font-bold"
                  >
                    ABOUT <br />
                    US
                  </p>
                  <p class="text-center md:text-[20px] xl:text-[32px] font-semibold uppercase">
                    taste&color
                  </p>
                  <p class="text-justify md:text-[15px] lg:text-[16px] xl:text-[20px] font-light">
                    Бренд в котором каждый надет что-то для себя. Это не просто бренд одежды, это
                    источник вдохновения и возможность выразить свой индивидуальный стиль в самых
                    лучших аспектах моды и элегантности.
                  </p>
                </div>
              </CardInfo>
            </div>
          </div>
          <div class="md:max-w-[325px] lg:max-w-[414px] xl:max-w-[533px]">
            <CardInfo :color="'B14F4F'">
              <div
                class="main_text flex flex-col gap-[20px] p-[10px] lg:p-[25px] pt-[23px] lg:pt-[44px]"
              >
                <p class="text-start md:text-[20px] lg:text-[24px] xl:text-[32px] font-semibold">
                  Требования для покупателей "taste&color":
                </p>
                <p class="text-justify md:text-[15px] lg:text-[16px] xl:text-[20px] font-light">
                  Обязанность №1 - Носить с удовольствием: В противном случае, разве это не
                  занавеска в гостиной? <br />
                  Не забыть почувствовать себя королевой/королем: Ведь кто еще, как не ты,
                  заслуживает этого? <br />
                  Избегать скучных моментов: Одежда "taste&color" предназначена для того, чтобы
                  каждый день был мини-модным показом. <br />
                  Сиять яркими красками даже в серых буднях: Главное - не поглотить офисный
                  дресс-код своим шикарным стилем. <br />
                  Превратить обычный день в феерию стиля: Помните, мир - это Ваш подиум, дорогие
                  покупатели! <br />
                  Не останавливаться на достигнутом: Ведь у нас каждая новая коллекция - как новая
                  страница в истории твоего стиля!
                </p>
              </div>
            </CardInfo>
          </div>
        </div>
        <div
          class="order-1 lg:order-2 relative flex lg:w-full justify-end md:items-end lg:items-start lg:pr-[120px]"
        >
          <img
            class="absolute hidden md:block md:top-0 md:left-0 md:max-w-[333px] lg:left-[5%] lg:-top-[40%] lg:max-w-[425px] xl:-left-[5%] xl:max-w-[609px]"
            style="box-shadow: 13px 14px 27px 0px rgba(0, 0, 0, 0.5)"
            src="/assets/photo_2023-10.jpeg"
            alt=""
          />
          <div class="md:max-w-[327px] lg:max-w-[414px] xl:max-w-[545px]">
            <CardInfo :color="'F3A352'">
              <div
                class="main_text flex flex-col gap-[20px] p-[10px] lg:p-[25px] pt-[23px] lg:pt-[44px]"
              >
                <p class="text-start md:text-[20px] lg:text-[24px] xl:text-[32px] font-semibold">
                  Обязанности бренда одежды taste&color перед вами:
                </p>
                <p class="text-justify md:text-[15px] lg:text-[16px] xl:text-[20px] font-light">
                  Поставлять высокое качество: "taste&color" обязан предоставлять потребителям
                  одежду высочайшего качества, соответствующую премиальным стандартам. <br />
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
    </div>

    <section
      class="section_3 relative mx-auto lg:max-w-[840px] z-10 sm:px-[5px] md:max-w-[608px] md:px-[20px] xl:max-w-[1236px]"
    >
      <div class="flex flex-col overflow-hidden">
        <template v-for="cros in cross" :key="cros.id">
          <div
            class="grid grid-cols-4 gap-y-[40px] gap-x-4 md:gap-x-0 lg:flex lg:items-center lg:justify-between"
            v-if="cros.active"
          >
            <div class="not_main_text group/buybtn col-span-2 md:col-span-1">
              <p class="text-[32px] xl:text-[48px]">
                Cales <span class="lg:text-[42px] xl:text-[64px]">&</span>
              </p>
              <div
                class="transitionSetting h-[153px] md:h-auto md:max-w-fit group-hover/buybtn:bg-wight flex justify-between md:justify-start max-h-[442px] rounded-[25px] bg-black p-[11px] md:text-[32px] xl:text-[40px]"
              >
                <p
                  class="text-wight group-hover/buybtn:text-black"
                  style="writing-mode: vertical-lr; text-orientation: upright"
                >
                  {{ cros.name }}
                </p>
                <div class="flex flex-col justify-between gap-[20px]">
                  <p
                    class="transitionSetting hidden md:block bg-wight group-hover/buybtn:text-wight w-min rotate-180 rounded-[55px] px-[14px] py-[33px] lg:px-[24px] lg:py-[43px] group-hover/buybtn:scale-105 group-hover/buybtn:bg-black"
                    style="writing-mode: vertical-lr; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                    @click="openForm(cros.id)"
                  >
                    buy now
                  </p>
                  <p
                    class="transitionSetting h-fit md:hidden bg-wight group-hover/buybtn:text-wight w-fit rounded-[55px] px-[12px] py-[10px] group-hover/buybtn:scale-105 group-hover/buybtn:bg-black"
                    style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                    @click="openForm(cros.id)"
                  >
                    buy now
                  </p>
                  <div
                    :class="forms[cros.id] ? 'block' : 'hidden'"
                    @click.self="openForm(cros.id)"
                    class="fixed top-0 left-0 z-[100] backdrop:blur-xl text-sm w-screen h-screen bg-black/30 flex items-center justify-center"
                  >
                    <Forms :title="'узнать о наличии:'" :img="cros.img[activeImg]"></Forms>
                  </div>
                  <p
                    class="text-wight transitionSetting group-hover/buybtn:text-black text-center text-[20px] md:text-[38px]"
                  >
                    {{ cros.prise }}$
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-2 md:col-span-3 relative lg:w-[442px] xl:w-[588px]">
              <div class="h-full w-full flex items-end">
                <img
                  class="transitionSetting absolute -z-10 animate-[spin_2s_ease-in-out_forwards]"
                  :class="{ grayscale: grayscale }"
                  src="/assets/vinil.png"
                  alt=""
                />
                <img
                  class="transitionSettingStrong relative z-0"
                  :class="{
                    'rotate-[20deg]': cros.rotate,
                    'rotate-[0deg]': !cros.rotate
                  }"
                  :src="'/assets/' + cros.img[activeImg]"
                  alt=""
                />
              </div>
            </div>
            <div class="col-span-3 col-start-2 md:col-start-2 md:col-span-2">
              <div
                class="flex md:justify-center lg:justify-normal lg:flex-col gap-[18px] md:gap-[27px] lg:gap-[44px]"
              >
                <div
                  class="group flex h-[42px] w-[42px] md:h-[74px] md:w-[74px] xl:h-[104px] xl:w-[104px] items-center justify-center overflow-hidden rounded-[15px] md:rounded-[29px] border-[2px] border-[#000]"
                >
                  <div
                    class="transitionSetting h-[27px] w-[27px] md:h-[42px] md:w-[42px] xl:h-[59px] xl:w-[59px] rounded-full bg-[#CE4B4B] group-hover:h-[150%] group-hover:w-[150%]"
                    @click="switchColor(1)"
                  ></div>
                </div>
                <div
                  class="group flex h-[42px] w-[42px] md:h-[74px] md:w-[74px] xl:h-[104px] xl:w-[104px] items-center justify-center overflow-hidden rounded-[15px] md:rounded-[29px] border-[2px] border-[#000]"
                >
                  <div
                    class="transitionSetting h-[27px] w-[27px] md:h-[42px] md:w-[42px] xl:h-[59px] xl:w-[59px] rounded-full bg-black group-hover:h-[150%] group-hover:w-[150%]"
                    @click="switchColor(2)"
                  ></div>
                </div>
                <div
                  class="group flex h-[42px] w-[42px] md:h-[74px] md:w-[74px] xl:h-[104px] xl:w-[104px] items-center justify-center overflow-hidden rounded-[15px] md:rounded-[29px] border-[2px] border-[#000]"
                  @click="switchColor(3)"
                >
                  <div
                    class="transitionSetting h-[27px] w-[27px] md:h-[42px] md:w-[42px] xl:h-[59px] xl:w-[59px] rounded-full bg-[#F3D3AF] group-hover:h-[150%] group-hover:w-[150%]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div
          class="mb-[100px] mt-[37px] flex flex-col md:flex-row items-center gap-[37px] md:overflow-x-auto xl:overflow-y-none md:overflow-y-hidden xl:overflow-x-none mx-[20px] md:mx-auto lg:max-w-[840px] z-10 sm:max-w-[520px] sm:px-[5px] md:max-w-[608px] md:px-[20px] xl:max-w-[1236px] md:h-[170px]"
          @mouseenter="rotateEnter()"
          @mouseleave="rotateLeave()"
        >
          <div
            class="grid min-w-[93px] md:min-w-[176px] grid-cols-4 grid-rows-2 gap-y-[10px] rounded-lg self-start md:self-auto"
          >
            <div class="h-[5px] md:h-[10px] w-full rounded-l-md bg-[#F3A352]"></div>
            <div class="h-[5px] md:h-[10px] w-full bg-[#F3D3AF]"></div>
            <div class="h-[5px] md:h-[10px] w-full bg-[#B14F4F]"></div>
            <div class="h-[5px] md:h-[10px] w-full rounded-r-md bg-[#FD865E]"></div>

            <div
              class="transitionSetting h-[5px] md:h-[10px] w-full rounded-md bg-black"
              :class="{
                'col-start-1 col-end-1': activeItem == 0,
                'col-start-2 col-end-2': activeItem == 1,
                'col-start-3 col-end-3': activeItem == 2,
                'col-start-4 col-end-4': activeItem == 3
              }"
            ></div>
          </div>
          <template v-for="cros in cross" :key="cros.id">
            <div
              class="flex group/cross md:self-auto"
              :class="cros.id % 2 ? 'self-start' : 'self-end'"
              v-show="!cros.active"
              @click="switchactive(cros.id)"
            >
              <div
                class="relative h-[104px] md:h-[126px] w-[104px] md:w-[126px] rounded-l-md"
                :style="'  background-color: #' + cros.color"
              >
                <img
                  :src="'/assets/' + cros.img['first']"
                  alt=""
                  class="top-1/5 absolute -translate-x-6 -rotate-[20deg] scale-[120%] md:scale-[140%]"
                />
              </div>
              <div
                class="relative h-[104px] md:h-[126px] w-[161px] md:w-[195px] rounded-r-md"
                :style="'  background-color: #' + cros.colorOpacity"
              >
                <div class="main_text absolute px-[10px] pt-[5px] text-[15px] md:text-[20px]">
                  <p class="font-semibold uppercase" style="letter-spacing: 2.5px">
                    calse & <br />

                    <span class="text-wight -ml-[8px] rounded-[13px] bg-black px-[8px] py-[4px]">
                      {{ cros.name }}</span
                    >
                    <br />
                    {{ cros.height }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="section_4 xl:pb-[300px]">
      <div
        class="relative"
        style="
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        "
      >
        <div
          class="absolute md:-top-1/4 lg:-top-2/3 left-0 right-0 -z-20 border-b-[3px] border-b-wight"
        >
          <img
            class="transitSetting w-full"
            :src="activeSlide == 0 ? '/assets/geers.png' : '/assets/geers2.png '"
            alt=""
          />
        </div>
        <div
          class="lg:max-w-[840px] relative mx-auto sm:px-[5px] md:max-w-[608px] md:px-[20px] xl:max-w-[1236px]"
        >
          <div
            class="transitionSetting relative flex flex-col md:flex-row w-full md:justify-end rounded-[20px] md:rounded-[31px] backdrop-blur-md"
            :class="{ 'bg-[#617d5f30]': activeSlide == 0, 'bg-[#eedbc25c]': activeSlide !== 0 }"
          >
            <p
              class="transitionSetting uppercase font-monster font-bold md:text-[32px] lg:text-[36px] xl:text-[64px] absolute left-[5%] top-[10%] md:top-[70%] lg:top-1/4 z-20"
              :class="{ 'text-[#b4c1af]': activeSlide == 0, 'text-[#B14F4F]': activeSlide !== 0 }"
              style="line-height: 138.023%; /* 88.335px */ letter-spacing: 18.56px"
            >
              TASTE & <br />
              color
            </p>

            <swiper
              :slides-per-view="1"
              @slideChange="cahgeIndex"
              :scrollbar="{
                hide: false
              }"
              :navigation="{
                prevEl: prev,
                nextEl: next
              }"
              :modules="modules"
              class="relative w-full"
            >
              <swiper-slide ref="mySwiper" v-for="(slide, index) in slides" :key="index">
                <div class="flex m-4 md:m-0 md:items-center justify-end h-full">
                  <img
                    class="w-[203px] md:w-[285px] lg:w-[400px] xl:w-[567px]"
                    :src="'/assets/' + slide"
                    alt=""
                  />
                </div>
              </swiper-slide>
              <div
                :class="{ 'opacity-0': activeArrowNext2 }"
                ref="prev"
                class="transitionSetting absolute flex items-center justify-center m-2 md:m-3 md:w-[40px] md:h-[40px] lg:m-10 lg:w-[60px] lg:h-[60px] bg-black/50 hover:bg-wight/50 rounded-full border-[2px] border-black left-0 top-0 z-30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                </svg>
              </div>
              <div
                ref="next"
                :class="{ 'opacity-0': activeArrowNext1 }"
                class="transitionSetting absolute flex items-center justify-center m-2 md:m-3 md:w-[40px] md:h-[40px] lg:m-10 lg:w-[60px] lg:h-[60px] bg-black/50 hover:bg-wight/50 rounded-full border-[2px] border-black right-0 top-0 z-30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </div>
            </swiper>

            <div
              class="transitionSetting flex md:h-full w-full md:w-[414px] items-start justify-center rounded-b-[20px] md:rounded-b-none md:rounded-r-[31px] py-[20px] md:py-[45px]"
              :class="{ 'bg-[#374D358F]': activeSlide == 0, 'bg-[#eedbc282]': activeSlide !== 0 }"
            >
              <div
                class="font-monster w-full md:w-auto px-[30px] md:px-0 flex flex-row-reverse md:flex-col items-center justify-between md:justify-center md:gap-[40px] lg:gap-[70px] xl:gap-24 not-italic text-black"
              >
                <div
                  class="flex flex-col justify-center gap-[26px] md:text-[20px] xl:text-[40px] tracking-[11px]"
                >
                  <p class="text-center font-bold">stevelock</p>
                  <div class="grid lg:w-[276px] xl:w-[322px] grid-cols-4 rounded-lg px-[20px]">
                    <div class="h-[10px] w-full rounded-l-md bg-[#F3A352]"></div>
                    <div class="h-[10px] w-full bg-[#F3D3AF]"></div>
                    <div class="h-[10px] w-full bg-[#B14F4F]"></div>
                    <div class="h-[10px] w-full rounded-r-md bg-[#FD865E]"></div>
                  </div>
                  <div
                    class="text-wight flex w-full md:hidden justify-between md:gap-[19px] lg:gap-[29px] xl:gap-[37px] text-[15px] lg:text-[16px] xl:text-[24px] uppercase"
                  >
                    <div
                      v-for="(item, index) in size"
                      :key="index"
                      class="transitionSetting tracking-normal flex h-[30px] w-[30px] md:h-[27px] md:w-[27px] lg:h-[33px] lg:w-[33px] xl:w-[48px] xl:h-[48px] items-center justify-center rounded-full border-[1px] border-solid border-black hover:bg-wight hover:text-black cursor-pointer"
                      @click="switchSize(index)"
                    >
                      <p>{{ item }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="hidden md:flex text-wight md:gap-[19px] lg:gap-[29px] xl:gap-[37px] md:text-[15px] lg:text-[16px] xl:text-[24px] uppercase"
                >
                  <div
                    v-for="(item, index) in size"
                    :key="index"
                    class="transitionSetting flex md:h-[27px] md:w-[27px] lg:h-[33px] lg:w-[33px] xl:w-[48px] xl:h-[48px] items-center justify-center rounded-full border-[1px] border-solid border-black hover:bg-wight hover:text-black cursor-pointer"
                    @click="switchSize(index)"
                  >
                    <p>{{ item }}</p>
                  </div>
                </div>
                <div class="flex items-center justify-center">
                  <div
                    class="font-monster text-wight flex flex-col items-start gap-[15px] md:gap-[51px] lg:text-[20px] xl:text-[24px] tracking-[6px] px-2"
                  >
                    <div class="flex flex-col gap-[13px] md:gap-[27px]">
                      <p class="">Торс</p>
                      <div class="flex items-center justify-center gap-3 w-[156px] md:w-auto">
                        <input
                          class="w-[81px]"
                          type="range"
                          max="120"
                          min="35"
                          step="2"
                          v-model="newItem2"
                        />
                        <p
                          class="text-wight font-monster lg:text-[20px] xl:text-[24px] font-medium min-w-fit"
                          style="line-height: 74.523%; /* 17.885px */ letter-spacing: -0.48px"
                        >
                          {{ newItem2 }} см
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-col gap-[27px]">
                      <p class="">Рукава</p>
                      <div class="flex items-center justify-center gap-3 w-[156px] md:w-auto">
                        <input type="range" max="123" min="32" step="1" v-model="newItem" />
                        <p
                          class="text-wight font-monster lg:text-[20px] xl:text-[24px] font-medium min-w-fit"
                          style="line-height: 74.523%; /* 17.885px */ letter-spacing: -0.48px"
                        >
                          {{ newItem }} см
                        </p>
                      </div>
                    </div>
                    <div
                      class="transitionSetting w-[145px] md:w-[160px] lg:w-[233px] bg-wight text-[12px] md:text-[15px] lg:text-[16px] xl:text-[24px] self-center text-black text-center flex items-center justify-center rounded-lg hover:bg-black hover:text-wight"
                    >
                      <p
                        @click.self="openForm(8)"
                        class="font-bold"
                        style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                      >
                        make a reservation
                      </p>
                    </div>
                  </div>
                  <div
                    :class="forms[8] ? 'block' : 'hidden'"
                    @click.self="openForm(8)"
                    class="fixed top-0 left-0 z-[100] backdrop:blur-xl text-sm w-screen h-screen bg-black/30 flex items-center justify-center"
                  >
                    <Forms :title="'узнать о наличии размера'"></Forms>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section_5 pt-[50px] md:pt-[150px] lg:pt-[200px] bg-[#020202]">
      <div class="h-screen border-t-[3px] border-t-wight">
        <div
          class="relative flex flex-col md:flex-row md:justify-end w-[90%] pb-[40px] mx-auto border-[38px] border-t-0 border-solid border-[#101010] rounded-[47px] rounded-t-[0]"
        >
          <swiper
            :slides-per-view="1"
            @slideChange="cahgeIndex2"
            :navigation="{
              prevEl: prev2,
              nextEl: next2
            }"
            :modules="modules"
            class="relative w-full ml-0"
          >
            <swiper-slide ref="mySwiper" v-for="(slide, index) in slider2" :key="index">
              <div
                class="flex items-start w-1/2 h-full"
                :class="{ 'justify-start': index == 0, 'justify-end': index == 1 }"
              >
                <img class="md:w-full lg:w-2/3" :src="'/assets/' + slide" alt="" />
              </div>
            </swiper-slide>
          </swiper>

          <div class="relative z-10 w-full md:w-2/3 p-[15px] flex flex-col gap-[48px] items-center">
            <Transition>
              <div v-if="activeSlide2 == 0">
                <p class="w-full text-start text-[#B4C1AF] lg:text-[20px] xl:text-[28px] font-bold">
                  Браслет <br />
                  “INNER DUO”
                </p>

                <p
                  class="text-[#CFC5C5] md:text-[15px] lg:text-[16px] xl:text-[24px] font-bold md:tracking-[4px] lg:tracking-[7px]"
                >
                  Был разработан командой дизайнеров отвечающих за эргономику для максимального
                  комфорта наших продуктов совместно с дизайнерами Ferrari из команды формулы 1 для
                  придания браслету элегантного и брутального вида
                </p>
              </div>
            </Transition>
            <Transition>
              <div v-if="activeSlide2 == 1">
                <p class="w-full text-start text-[#B4C1AF] lg:text-[20px] xl:text-[28px] font-bold">
                   Подвеска <br />
                  “INNER DUO”
                </p>

                <p
                  class="text-[#CFC5C5] md:text-[15px] lg:text-[16px] xl:text-[24px] font-bold md:tracking-[4px] lg:tracking-[7px]"
                >
                  Был разработан командой дизайнеров отвечающих за эргономику для максимального
                  комфорта наших продуктов совместно с дизайнерами Ferrari из команды формулы 1 для
                  придания браслету элегантного и брутального вида
                </p>
              </div>
            </Transition>
            <div
              :class="forms[9] ? 'block' : 'hidden'"
              @click.self="openForm(9)"
              class="fixed top-0 left-0 z-[100] backdrop:blur-xl text-sm w-screen h-screen bg-black/30 flex items-center justify-center"
            >
              <Forms></Forms>
            </div>
            <div
              class="flex flex-col md:flex-row justify-center gap-[32px] md:-translate-x-[17%] lg:translate-x-0 font-monster text-wight lg:text-[20px] xl:text-[24px] tracking-[6px]"
            >
              <div
                class="transitionSetting w-[158px] md:w-[233px] bg-wight self-center text-black text-center flex items-center justify-center rounded-lg hover:bg-black hover:text-wight"
              >
                <p
                  @click.self="openForm(9)"
                  class="font-bold py-[20px]"
                  style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  TEST IT
                </p>
              </div>

              <div class="flex item-center justify-center gap-[20px]">
                <div
                  ref="prev2"
                  :class="{ 'opacity-0': activeArrow2Next1 }"
                  class="transitionSetting flex items-center justify-center m-2 w-[60px] h-[60px] bg-wight/70 hover:bg-wight/90 rounded-full border-[2px] border-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                  </svg>
                </div>
                <div
                  :class="{ 'opacity-0': activeArrow2Next2 }"
                  ref="next2"
                  class="transitionSetting flex items-center justify-center m-2 w-[60px] h-[60px] bg-wight/70 hover:bg-wight/90 rounded-full border-[2px] border-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import Collection from '@/components/CollectionComponent.vue'
import CardInfo from '@/components/CardInfoComponent.vue'
import Forms from '@/components/FormsOverlay.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar, Navigation } from 'swiper/modules'

export default defineComponent({
  data() {
    return {
      activeImg: 'first' as 'first' | 'second' | 'thrih',
      activeItem: 0,
      videoPause: false,
      currentTimeVideo: 0,
      ratateActive: false,
      grayscale: true,
      newItem: 68,
      newItem2: 50,
      size: ['s', 'm', 'l', 'xl'],
      slides: ['sweet.png', 'Ломтик6.png', 'Ломтик8.png'],
      slider2: ['Ломтик12.png', 'Ломтик13.png'],
      activeSlide: 0,
      activeSlide2: 0,
      activeArrowNext1: false,
      activeArrowNext2: true,
      activeArrow2Next1: true,
      activeArrow2Next2: false,
      endSlideIndex: 0,
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
      ],
      forms: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
  },

  setup() {
    const prev = ref(null)
    const next = ref(null)
    const prev2 = ref(null)
    const next2 = ref(null)
    return {
      modules: [Scrollbar, Navigation],
      prev,
      next,
      prev2,
      next2
    }
  },
  watch: {
    activeSlide(activeSlide) {
      if (this.activeSlide == 2) {
        this.activeArrowNext1 = true
      } else {
        this.activeArrowNext1 = false
      }
      if (this.activeSlide == 0) {
        this.activeArrowNext2 = true
      } else {
        this.activeArrowNext2 = false
      }
    },
    activeSlide2(activeSlide2) {
      if (this.activeSlide2 == 0) {
        this.activeArrow2Next1 = true
      } else {
        this.activeArrow2Next1 = false
      }
      if (this.activeSlide2 == 1) {
        this.activeArrow2Next2 = true
      } else {
        this.activeArrow2Next2 = false
      }
    },
    activeItem(newQuestion) {
      this.grayscale = false

      setTimeout(() => {
        this.grayscaleActive()
      }, 1700)
    }
  },
  methods: {
    openForm(el: number) {
      this.forms[el] = !this.forms[el]
    },
    switchSize(id: number) {
      console.log(id)

      if (id == 0) {
        this.newItem = 68
        this.newItem2 = 50
      }
      if (id == 1) {
        this.newItem = 80
        this.newItem2 = 60
      }
      if (id == 2) {
        this.newItem = 90
        this.newItem2 = 70
      }
      if (id == 3) {
        this.newItem = 108
        this.newItem2 = 84
      }
    },
    cahgeIndex(swiper: any) {
      this.activeSlide = swiper.activeIndex
    },
    cahgeIndex2(swiper: any) {
      this.activeSlide2 = swiper.activeIndex
    },

    grayscaleActive() {
      this.grayscale = true
    },
    switchactive(id: number) {
      for (let index = 0; index < this.cross.length; index++) {
        const element = this.cross[index]
        if ((element.active = true)) {
          element.active = false
          element.rotate = true
          this.activeImg = 'first'
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
      }
      if (color == 2) {
        this.activeImg = 'second'
      }
      if (color == 3) {
        this.activeImg = 'thrih'
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
    CardInfo,
    Swiper,
    SwiperSlide,
    Forms
  }
})
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.v-enter-from,
.v-leave-to {
  position: relative;
  opacity: 0;
}
input[type='range'] {
  -webkit-appearance: none;
  background: #ae2929;
  height: 2px;
  width: 208px;
  border-radius: 2px;
}

/***** Thumb Styles *****/
/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  /* Override default look */
  appearance: none;
  background-color: #9c2424;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  cursor: pointer;
}

.main_text {
  color: #332f2d;
  font-family: Montserrat;
}

.buyNow {
  border: 3px solid #000;
  background: rgba(43, 140, 58, 0.08);

  color: #000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Wellfleet;

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
  font-weight: 800;
  font-family: Montserrat;
  text-transform: uppercase;
}

.backplace {
  background-image: url('/assets/vinil.webp');
  background-size: cover;
}

.transitionSetting {
  transition: all 0.2s ease-out;
}

.transitionSettingStrong {
  transition: all 0.3s ease-out;
}
</style>

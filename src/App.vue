<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="info_header h-[70vh]">
    <div class="header_wrapper">
      <div
        class="header_lay-link flex items-center justify-between mb-[24px] h-[21px] w-full px-3 bg-[#000]"
      >
        <p>CREATED BY Taste$color</p>
        <div class="flex gap-10">
          <RouterLink to="/policy">Privacy Policy</RouterLink>
          <RouterLink to="/termuse">Terms of use</RouterLink>
        </div>
      </div>
      <nav
        class="header_nav lg:max-w-[840px] mx-auto sm:max-w-[320px] sm:px-[5px] md:max-w-[608px] md:px-[20px] xl:max-w-[1236px]"
      >
        <div class="link_nav">
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink to="/preorder">Предзаказ</RouterLink>
          <div class=""></div>
          <RouterLink to="/bisness">Для Предложений</RouterLink>
          <RouterLink to="/about">О Нас</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer class="footer">
    <div class="pt-[150px] bg-[#020202]">
      <div
        class="relative bg-cover bg-center h-screen"
        style="background-image: url('../src/images/Ломтик223.png')"
      >
        <div class="absolute w-full top-0 -translate-y-[100%]">
          <img class="w-full" src="@/images/Ломтик233.png" alt="" />
        </div>
        <div
          class="lg:max-w-[840px] mx-auto sm:max-w-[320px] sm:px-[5px] md:max-w-[608px] md:px-[20px] xl:max-w-[1236px]"
        >
          <div
            class="pt-[181px] pb-[153px] font-monster text-wight footer_main_text tracking-[4.8px] text-center"
          >
            <p class="font-bold">Where Style Meets Spectrum</p>
            <p class="font-bold">“Где стиль сливается в спектре”</p>
          </div>
        </div>
        <div class="absolute bottom-0 w-full flex flex-col gap-[40px]">
          <div class="flex items-center justify-between px-[20px]">
            <div class="text-link_footer flex flex-col lg:flex-row gap-[60px]">
              <div class="flex items-center gap-[26px]">
                <img class="w-[52px] h-[52px]" src="@/images/youtube.png" alt="" />
                <div
                  class="transitionSetting bg-wight self-center text-black text-center flex items-center justify-center rounded-lg hover:bg-black hover:text-wight"
                >
                  <p
                    class="font-bold py-[10px] px-[20px]"
                    style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    LINK IN
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-[26px]">
                <img class="w-[52px] h-[52px]" src="@/images/telegram.png" alt="" />
                <div
                  class="transitionSetting bg-wight self-center text-black text-center flex items-center justify-center rounded-lg hover:bg-black hover:text-wight"
                >
                  <p
                    class="font-bold py-[10px] px-[20px]"
                    style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    LINK IN
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-[26px]">
                <img class="w-[52px] h-[52px]" src="@/images/vk.png" alt="" />
                <div
                  class="transitionSetting bg-wight self-center text-black text-center flex items-center justify-center rounded-lg hover:bg-black hover:text-wight"
                >
                  <p
                    class="font-bold py-[10px] px-[20px]"
                    style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    LINK IN
                  </p>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center text-center uppercase">
              <p
                class="text-link_footer_2 transitionSetting bg-wight h-[83px] w-[83px] rounded-[30px] self-center text-black text-center flex items-center justify-center hover:bg-black hover:text-wight font-bold py-[20px]"
                style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                up <br />
                site
              </p>
            </div>
          </div>
          <div
            class="flex text-link_footer_2"
            style="
              border-top: 2px solid #fff;
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
                linear-gradient(90deg, rgba(255, 255, 255, 0.25) 26.56%, rgba(0, 0, 0, 0) 100%);
            "
          >
            <div
              class="flex flex-col items-start justify-between w-full uppercase px-[20px] text-wight"
            >
              <p>language: ru</p>
              <img src="@/images/logo1.png" alt="" />
            </div>
            <div class="flex flex-col uppercase">
              <p class="text-wight">Subscribe to our newslater</p>
              <p class="px-3 text-black bg-wight w-fit">Subscribe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
$maxWidth: 1440;
@mixin adaptiv_font_menu($pcSize, $mobSize) {
  $addSize: $pcSize - $mobSize;
  $maxWidth: $maxWidth - 726;
  font-size: calc(#{$mobSize + px} + #{$addSize} * ((100vw - 726px) / #{$maxWidth}));
}
@mixin adaptiv_font($pcSize, $mobSize) {
  $addSize: $pcSize - $mobSize;
  $maxWidth: $maxWidth - 375;
  font-size: calc(#{$mobSize + px} + #{$addSize} * ((100vw - 375px) / #{$maxWidth}));
}
.header_lay-link {
  color: #fff;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.link_nav {
  display: flex;
  justify-content: space-between;

  * {
    text-decoration: none;
    color: #fff;
    font-family: Montserrat;

    @include adaptiv_font_menu(32, 15);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
  }
}

.info_header {
  background-image: url('../src/images/Ломтик14.png');
  background-size: cover;
  background-position: top;
}

.footer_main_text {
  @include adaptiv_font(48, 20);
}
.text-link_footer {
  @include adaptiv_font(16, 12);
}
.text-link_footer_2 {
  @include adaptiv_font(20, 12);
}
.transitionSetting {
  transition: all 0.2s ease-out;
}
</style>

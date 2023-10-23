<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="info_header h-screen">
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
        class="header_nav lg:max-w-[840px mx-auto sm:max-w-[320px] sm:px-[5px] md:max-w-[608px] md:px-[20px] xl:max-w-[1236px]"
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
</template>

<style scoped lang="scss">
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
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
  }
}

.info_header {
  background-image: url('../src/images/Ломтик14.png');
  background-size: cover;
  background-position: center;
}
</style>

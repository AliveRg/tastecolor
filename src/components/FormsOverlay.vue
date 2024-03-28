<template>
  <div class="p-8 rounded-lg shadow-lg bg-wight/90 max-w-md w-full">
    <div class="flex w-full justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">{{ title }}</h1>
      <div class="">
        <img class="w-[100px]" :src="'../src/images/' + img" alt="" />
      </div>
    </div>
    <form ref="form" @submit.prevent="sendEmail">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="user_name"
          id="name"
          class="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="John Doe"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="user_email"
          id="email"
          class="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="johndoe@example.com"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          class="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        value="Send"
        class="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        Send
      </button>
    </form>
    <div class="mt-4 text-sm text-gray-600">
      If you prefer not to use web forms, you can reveal our email address on
      <a href="https://veilmail.io/e/FkKh7o" class="underline" target="_blank"
        >veilmail.io/e/FkKh7o</a
      >.
    </div>
  </div>
</template>

<script lang="ts">
import emailjs from '@emailjs/browser'
import { ref, onMounted, defineComponent } from 'vue'

export default {
  props: {
    title: { type: String, default: 'Contact Us' },
    img: { type: String, default: ' ' }
  },
  methods: {
    sendEmail() {
      // emailjs
      //   .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.$refs.form, 'YOUR_PUBLIC_KEY')
      //   .then(
      //     (result) => {
      //       console.log('SUCCESS!', result.text)
      //     },
      //     (error) => {
      //       console.log('FAILED...', error.text)
      //     }
      //   )
    }
  }
}
</script>

<style></style>

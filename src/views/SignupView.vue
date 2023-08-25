<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Sign Up
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-4 md:space-y-6" action="#">
            <InputField
              v-model="email"
              label="Email"
              type="text"
              placeholder="test@example.com"
              errorMsg="이메일이 이상함"
            />
            <InputField
              v-model="password"
              label="Password"
              type="password"
              placeholder="••••••••"
            />
            <InputField
              v-model="passwordConfirm"
              label="Password Confirm"
              type="password"
              placeholder="••••••••"
            />
            <InputField
              v-model="username"
              label="Name"
              type="text"
              placeholder="Your Name"
            />

            <button
              @click="signup"
              type="button"
              class="w-full text-white bg-[#1C64F2] hover:bg-[#76A9FA] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Do you have accout?
              <RouterLink
                to="/login"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Log in
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import InputField from "../components/Utils/InputField.vue";

import { ref } from "vue";

const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const username = ref("");

const signup = () => {
  console.log(email.value);
  console.log(password.value);
  console.log(passwordConfirm.value);
  console.log(username.value);
};
</script>

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
        Login
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-4 md:space-y-6" action="#">
            <InputField
              v-model="email"
              type="email"
              label="Email"
              placeholder="name@company.com"
            />
            <InputField
              v-model="password"
              type="password"
              label="Password"
              placeholder="••••••••"
            />

            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Forgot password?</a
              >
            </div>
            <button
              @click="login"
              type="button"
              class="w-full text-white bg-[#1C64F2] hover:bg-[#76A9FA] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>

            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <RouterLink
                to="/signup"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
      <div class="flex justify-center items-center mt-5 w-full sm:max-w-md">
        <div
          @click="googleLogin"
          class="border rounded-full p-3 cursor-pointer shadow-sm hover:bg-gray-100"
        >
          <GoogleIcon :size="15" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import InputField from "../components/Utils/InputField.vue";
import GoogleIcon from "icons/Google.vue";
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();
const router = useRouter();
const email = ref("");
const password = ref("");

const login = () => {
  console.log(email.value);
  console.log(password.value);
};

const googleLogin = async () => {
  await userStore.googleLogin();
  if (userStore.id) {
    router.push("/");
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <label
      :for="`${label}-id`"
      :class="
        error
          ? 'text-red-700 dark:text-red-500'
          : 'text-gray-900 dark:text-white'
      "
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :id="`${label}-id`"
      :placeholder="placeholder"
      :class="
        error
          ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
          : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600'
      "
      class="border sm:text-sm rounded-lg block w-full p-2.5"
    />
    <p v-show="error" class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ errorMsg }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
  placeholder: String,
  error: Boolean,
  errorMsg: String,
  modelValue: String,
});
defineEmits(["update:modelValue"]);
</script>

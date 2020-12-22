<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>{{ plusOne }}</p>
</template>

<script>
import { ref, computed } from "vue"
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0)
    const plusOne = computed(() => count.value + "test")
    return { count, plusOne }
  },
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="addCount">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>{{ plusOne }}</p>
  <p>{{ storageData.count }}</p>
</template>

<script>
import { ref, computed } from 'vue'

import useLocalStorage from '../use/useLocalStorage'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const { storageData, setStorage } = useLocalStorage()

    const count = ref(0)

    const addCount = () => {
      count.value++
      setStorage('count', count.value)
      console.log(storageData)
    }

    const plusOne = computed(() => count.value + 'test')

    return { count, plusOne, addCount, storageData }
  },
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />

  <p>localstorage{{ test }}</p>
</template>

<script>
import { reactive, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import useLocalStorage from './use/useLocalStorage'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const { getStorage, setStorage, storageData } = useLocalStorage()
    const test = reactive(storageData)
    return { test }
  },
}
</script>

import { reactive } from "vue"

export default function useLocalStorage() {

    const storageDataBase = localStorage.getItem('storageDataBase') ? JSON.parse(localStorage.getItem('storageDataBase')) : {}

    const storageDataR = reactive({ storageDataBase: storageDataBase })
    console.log(storageDataR)
    const storageData = storageDataR.storageDataBase

    const setCash = (key, value) => {
        localStorage.setItem('storageDataBase', JSON.stringify(storageData))
    }

    const setStorage = (key, value) => {
        console.log(111)
        storageData[key] = value
        setCash(key, value)
    }
    const getStorage = (key) => {
        return storageData[key]
    }

    return { storageData, setStorage, getStorage }
}
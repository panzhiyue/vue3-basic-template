<template>
  <div>{{ message }}</div>
  <div>{{ count }}<br /><button @click="increment">自增</button></div>
</template>
<script setup>
import {ref,computed} from "vue"
import { useHomeStore } from "@/store/home.js";
let homeStore = useHomeStore();

const message=ref('Hello World')
const count =computed(()=>{
    return homeStore.count;
})

const increment=()=>{
    homeStore.increment();
}

</script>
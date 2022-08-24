<script setup>
import { ref } from 'vue'

const language = ref('') 
</script>

<template>
  <div id="nav-var" class="my-2 px-24 container-fluid w-full flex flex-wrap items-center justify-between">
    <div class="container-fluid px-2 bg-slate-300/80 rounded-sm shadow-sm w-full">
      <ul class="navbar-nav pl-0 flex flex-row list-style-none mr-auto">
        <li class="nav-item px-6 py-2">
          <a class="nav-link text-black font-bold" href="">
            <img src="favicon.ico" style="height: 40px" alt="" loading="lazy" />
          </a>
        </li>
        <li class="nav-item p-4">
          <a class="nav-link text-black font-bold align-bottom" href="">Studies</a>
        </li>
        <li class="nav-item p-4">
          <a class="nav-link text-black font-bold" href="">Work experience</a>
        </li>
        <li class="nav-item p-4">
          <a class="nav-link text-black font-bold" href="">Projects</a>
        </li>
      </ul>
    </div>
  </div>
  <div id="body-container" class="ml-24 mr-24 flex flex-col">
    <div id="header-container">
      <div id="title-container" class="float-left p-16 w-2/5">
        <div id="title-bg" class="bg-slate-300/80 p-6 rounded-sm shadow-sm">
          <h1 class="font-bold text-5xl text-black mb-16">Rubén<br />Gómez Dopazo</h1>
          <h3 class="text-2xl text-black">Software Engineer</h3>
        </div>
      </div>
      <div class="float-right p-16 w-3/5">
        <p class="text-white">Algo de descripción explicando las movidas más importantes.</p>
      </div>
    </div>
  </div>
  <div class="ml-24 mr-24 flex flex-auto">
    <label for="lang-selector" class="pr-2 text-white">Language:</label>
    <select id="lang-selector" name="lang-selector" class="bg-slate-300/80" v-model="language">
      <option value="EN" selected>EN</option>
      <option value="ES">ES</option>
    </select>
  </div>
</template>

<style scoped>
</style>

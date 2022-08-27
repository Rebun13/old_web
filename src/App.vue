<script setup>
import Translate from './components/Translate.vue';
import Studies from './components/Studies.vue';
import Work from './components/Work.vue';
import Projects from './components/Projects.vue';
</script>

<template>
  <div id="nav-var" class="my-2 px-24 container-fluid w-full flex flex-wrap items-center justify-between">
    <div class="container-fluid px-2 bg-primary rounded-sm shadow-sm w-full">
      <ul class="navbar-nav pl-0 flex flex-row list-style-none mr-auto">
        <li class="nav-item px-6 py-2">
          <a class="nav-link text-black font-bold" href="">
            <img src="favicon.ico" style="height: 40px" alt="" loading="lazy" />
          </a>
        </li>
        <li class="nav-item p-4">
          <a class="nav-link text-black font-bold align-bottom" href="#studies">{{ $t('headerStudies') }}</a>
        </li>
        <li class="nav-item p-4">
          <a class="nav-link text-black font-bold" href="#work-experience">{{ $t('headerWork') }}</a>
        </li>
        <li class="nav-item p-4">
          <a class="nav-link text-black font-bold" href="#projects">{{ $t('headerProjects') }}</a>
        </li>
      </ul>
    </div>
  </div>
  <div id="body-container" class="ml-24 mr-24 flex flex-col">
    <div id="header-container">
      <div id="title-container" class="float-left py-16 w-2/5">
        <div id="title-bg" class="bg-primary p-6 rounded-sm shadow-sm">
          <h1 class="font-bold text-5xl text-white mb-16">{{ $t('myName') }}<br/>{{ $t('mySurname') }}</h1>
          <h3 class="text-2xl text-black">{{ $t('myTitle') }}</h3>
        </div>
      </div>
      <div id="description-container" class="float-right p-16 w-3/5">
        <p id="myDescription" class="text-clear" v-html="$t('myDescription')"></p>
      </div>
    </div>
  </div>
  <Studies/>
  <Work/>
  <Projects/>
  <Translate/>
</template>

<style scoped>
</style>

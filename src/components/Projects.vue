<script setup>

</script>
<template>
  <div class="ml-24 mr-24 mb-12 flex flex-wrap">
    <div id="studies-header" class="mb-4 w-full">
      <h1 id="projects-experience" class="text-clear text-3xl font-bold w-full">{{ $t("headerProjects") }}</h1>
      <hr class="my-0 h-px w-full bg-clear border-0">
    </div>
    <div id="projects-content" class="w-full">
      <div id="projects-text" class="flex">
        <p id="projects-intro" class="text-clear" v-html="$t('projectsIntro')"></p>
      </div>
    </div>
  </div>
</template>
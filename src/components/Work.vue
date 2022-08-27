<script setup>

</script>
<template>
  <div class="ml-24 mr-24 mb-12 flex flex-wrap">
    <div id="studies-header" class="mb-4 w-full">
      <h1 id="work-experience" class="text-clear text-3xl font-bold w-full">{{ $t("headerWork") }}</h1>
      <hr class="my-0 h-px w-full bg-clear border-0">
    </div>
    <div id="work-content" class="w-full">
      <div id="work-text" class="flex">
        <p id="work-intro" class="text-clear" v-html="$t('workIntro')"></p>
      </div>
    </div>
  </div>
</template>
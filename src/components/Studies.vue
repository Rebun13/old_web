<script setup>

</script>
<template>
  <div class="ml-24 mr-24 mb-12 flex flex-wrap">
    <div id="studies-header" class="mb-4 w-full">
      <h1 id="studies" class="text-clear text-3xl font-bold w-full">{{ $t("headerStudies") }}</h1>
      <hr class="my-0 h-px w-full bg-clear border-0">
    </div>
    <div id="studies-content" class="w-full">
      <div id="studies-text" class="flex">
        <p id="studies-intro" class="text-clear" v-html="$t('studiesIntro')"></p>
      </div>
      <div id="studies-table-container" class="flex my-4">
        <!-- First column -->
        <div id="first-column" class="w-1/6 text-sm text-right">
          <div id="empty-cell" class="w-full p-2 text-clear"></div>
          <div class="w-full p-2 border-r-2 text-clear">
            <span class="text-clear hover:text-accent">{{ $t("secondarySchool") }}</span>
          </div>
          <div class="w-full p-2 border-r-2 text-clear">
            <span class="text-clear hover:text-accent">{{ $t("mechanicalEngineering") }}</span>
          </div>
          <div class="w-full p-2 border-r-2 text-clear">
            <span class="text-clear hover:text-accent">{{ $t("telecomEngineering") }}</span>
          </div>
          <div class="w-full p-2 border-r-2 text-clear">
            <span class="text-clear hover:text-accent">{{ $t("softwareEngineering") }}</span>
          </div>
          <div class="w-full p-2 border-r-2 text-clear">
            <span class="text-clear hover:text-accent">{{ $t("cloudDeveloper") }}</span>
          </div>
        </div>
        <!-- Table body -->
        <div id="table-body" class="w-auto flex flex-col">
          <!-- row header -->
          <div id="table-header" scope="col" class="text-sm font-medium text-clear text-center">
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2012</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2013</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2014</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2015</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2016</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2017</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2018</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2019</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2020</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2021</span>
            <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2022</span>
              <span class="px-6 py-1 border-secondary border-2 bg-primary text-secondary font-bold rounded-sm"
              colspan="2">2023</span>
          </div>
          <!-- row secondary school -->
          <div scope="col" class="text-sm font-medium border-clear py-4 text-left flex flex-row">
            <div class="grid grid-cols-12 divide-x bg-grad1 rounded-r-3xl h-5"><span class="text-clear"></span></div>
            <div class="w-21/24"></div>
          </div>
          <!-- row mechanical engineering -->
          <div scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">

          </div>
          <!-- row telecom engineering -->
          <div scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">

          </div>
          <!-- row software engineering -->
          <div scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">

          </div>
          <!-- cloud developer -->
          <div scope="col" class="text-sm font-medium hover:text-accent px-6 py-4 text-left">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
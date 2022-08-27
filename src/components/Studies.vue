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
      <div id="studies-table-container flex">
        <table class="table-auto my-4 border-clear">
          <thead  scope="col" class="border-b text-sm font-medium text-clear text-center">
            <tr>
              <th class="px-6 py-1 border-r"></th>
              <th class="px-6 py-1 border-r" colspan="2">2012</th>
              <th class="px-6 py-2 border-r" colspan="2">2013</th>
              <th class="px-6 py-1 border-r" colspan="2">2014</th>
              <th class="px-6 py-1 border-r" colspan="2">2015</th>
              <th class="px-6 py-1 border-r" colspan="2">2016</th>
              <th class="px-6 py-1 border-r" colspan="2">2017</th>
              <th class="px-6 py-1 border-r" colspan="2">2018</th>
              <th class="px-6 py-1 border-r" colspan="2">2019</th>
              <th class="px-6 py-1 border-r" colspan="2">2020</th>
              <th class="px-6 py-1 border-r" colspan="2">2021</th>
              <th class="px-6 py-1 border-r" colspan="2">2022</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="col" class="text-sm font-medium border-clear px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-clear hover:text-accent">{{ $t("secondarySchool") }}</span>
              </td>
              <td class="bg-gradient-to-l from-grad1"></td>
              <td class="bg-grad1"></td>
              <td class="bg-grad1"></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
            </tr>
            <tr scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-clear hover:text-accent">{{ $t("mechanicalEngineering") }}</span>
              </td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="bg-grad2"></td>
              <td class="bg-grad2"></td>
              <td class="bg-grad2"></td>
              <td class="bg-grad2"></td>
              <td class="bg-grad2"></td>
              <td class="bg-gradient-to-r from-grad2"></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
            </tr>
            <tr scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-clear hover:text-accent">{{ $t("telecomEngineering")}}</span>
              </td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="bg-grad3"></td>
              <td class="bg-gradient-to-r from-grad3"></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
            </tr>
            <tr scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-clear hover:text-accent">{{ $t("softwareEngineering")}}</span>
              </td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="bg-grad4"></td>
              <td class="bg-grad4"></td>
              <td class="bg-grad4"></td>
              <td class="bg-grad4"></td>
              <td class="bg-grad4"></td>
              <td class="bg-grad4"></td>
              <td class="bg-grad4"></td>
              <td class="bg-grad4"></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
            </tr>
            <tr scope="col" class="text-sm font-medium hover:text-accent px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-clear hover:text-accent">{{ $t("cloudDeveloper")}}</span>
              </td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="border-dotted border-clear/50 border-r-2"></td>
              <td></td>
              <td class="bg-grad5"></td>
              <td class="bg-grad5"></td>
              <td class="bg-gradient-to-r from-grad5"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
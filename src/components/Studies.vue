<script setup>

</script>
<template>
  <div class="ml-24 mr-24 w-full">
    <div id="studies-header" class="w-full mb-4">
      <h1 class="text-clear">{{ $t("headerStudies") }}</h1>
      <hr class="my-0 h-px w-1/4 bg-clear border-0">
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
                <span class="text-primary hover:text-accent">Secondary school</span>
              </td>
              <td class="bg-gradient-to-l from-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-primary hover:text-accent">Mechanical Engineering</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-gradient-to-r from-accent"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-primary hover:text-accent">Telecom Engineering</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="bg-accent"></td>
              <td class="bg-gradient-to-r from-accent"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-primary hover:text-accent">Software Engineering</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td></td>
            </tr>
            <tr scope="col" class="text-sm font-medium text-primary hover:text-accent px-6 py-4 text-left">
              <td class="p-2 border-r text-clear">
                <span class="text-primary hover:text-accent">Cloud developer</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="bg-accent"></td>
              <td class="bg-accent"></td>
              <td class="bg-gradient-to-r from-accent"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
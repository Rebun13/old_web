<script setup>
  import { ref } from 'vue'

  const languages = ref([
    {language: 'en', title: 'English', flag: '🇬🇧'},
    {language: 'es', title: 'Español', flag: '🇪🇸'}
  ])

</script>
<template>
  <div class="ml-24 mr-24 flex flex-auto">
    <label for="lang-selector" class="pr-2 text-clear">{{ $t('language') }}:</label>
    <select id="lang-selector" name="lang-selector" class="bg-secondary/80 border-clear border-2 rounded-md text-clear" v-model="$i18n.locale">
      <option v-for="item in languages" :value="item.language" class="text-clear">{{ item.title }} {{ item.flag }}</option>
    </select>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { i18n } from '@/plugins/i18n';

  const language = ref('en')
  const languages = ref([
    {language: 'en', title: 'English', flag: '🇬🇧'},
    {language: 'es', title: 'Español', flag: '🇪🇸'}
  ])
  
  console.log("Init: " + i18n.locale + "; " + i18n.messages)

  function changeLocale() {
    i18n.locale = language.value
    console.log("Change: " + i18n.locale + "; " + i18n.messages)
  }
</script>
<template>
  <div class="ml-24 mr-24 flex flex-auto">
    <label for="lang-selector" class="pr-2 text-white">{{ $t('language') }}:</label>
    <select id="lang-selector" name="lang-selector" class="bg-secondary/80" v-model="language" @change="changeLocale">
      <option v-for="item in languages" :value="item.language">{{ item.title }} {{ item.flag }}</option>
    </select>
  </div>
</template>
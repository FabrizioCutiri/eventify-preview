<script>
import {Avatar as PvAvatar, Toolbar as PvToolbar} from "primevue";
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "header-content",
  components: {PvAvatar, LanguageSwitcher, PvToolbar}
}
</script>

<template>
  <pv-toolbar class="p-2">
    <template #start>
      <img  src="../../assets/eventify-logo.png" alt="eventify-logo">
    </template>
    <template #end>
      <language-switcher/>
      <pv-avatar class="ml-4" label="U" shape="circle"></pv-avatar>
    </template>
  </pv-toolbar>
</template>

<style scoped>
  img{
    width: 150px;
  }
</style>
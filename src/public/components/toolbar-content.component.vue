<script>
import {Toolbar as PvToolbar} from "primevue";

export default{
  name: 'toolbar-content',
  components: {PvToolbar},
}
</script>

<template>
 <pv-toolbar class="flex flex-column toolbar-custom ">
   <template #center>
     <div class="flex flex-column">
       <a href="#">Home</a>
       <a href="#">Quotes</a>
     </div>
   </template>
 </pv-toolbar>
</template>

<style scoped>
.toolbar-custom {
  height: 100vh;
  background-color: #fff;
  padding: 0;
  border: none;
  border-radius: 0;
  display: block;
}

a {
  padding: 25px 48px;
  text-decoration: none;
  text-align: center;
  color: #000;
}
a:hover {
  background-color: #3A506B;
  color: #fff;
  transition: 0.3s ease-in-out;
}
</style>
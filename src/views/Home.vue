<template>
    <div class="container mt-5 text-center">
        <h3> {{message}} </h3>
    </div>
</template>

<script>
import {  onMounted, ref } from '@vue/runtime-core';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
  name:"HomePage",

  setup() {
    const message = ref("");
    const info = ref([]);
    const store = useStore();

    function authHeader(){
      return localStorage.getItem('token');
    }

    onMounted(()=>{
      axios.get('https://localhost:7072/ApplicationUser/GetUser', 
         {
           headers:{Authorization: `Bearer ${authHeader()}`}
         }).then((result)=>{
          info.value = result.data;
          store.state.userEmail = result.data;
          message.value = `Welcome ${info.value}!`;
          if(info.value != '') {
            store.dispatch('setAuth', true);
          } else {
            store.dispatch('setAuth', false);
          }
          
        });
    });

    return {
      message,
    }

  }
}


</script>

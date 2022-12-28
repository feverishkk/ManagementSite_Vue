<template>
    <va-navbar color="#282F69" style="height: 50px;">
      <template #left>
        <router-link to="/"> <va-navbar-item class="logo fontcolour" > LOGO </va-navbar-item> </router-link> 
      </template>
      <template #right>
        <va-navbar-item></va-navbar-item>
        <va-navbar-item>
        </va-navbar-item>

        <va-navbar-item v-if="auth===true">
            <router-link to="/"> <va-navbar-item class="mr-5 fontcolour" @click="logout" > Logout </va-navbar-item>
            </router-link>
        </va-navbar-item>

        <va-navbar-item v-if="auth===false">
            <router-link to="/login"> <va-navbar-item class="mr-5 fontcolour" > Login </va-navbar-item> </router-link>
            <router-link to="/register"> <va-navbar-item class="mr-2 fontcolour"> Register </va-navbar-item> </router-link>
        </va-navbar-item>

      </template>
    </va-navbar>
  </template>

<script>
import { computed } from '@vue/runtime-core'
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

  export default {
    name:"NavBar",
    setup(){
      const router = useRouter();
      const store = useStore();
      const auth = computed(()=>store.state.auth);

      const logout = async () => {
        await axios.post('https://localhost:7072/ApplicationUser/Logout',{}).then(()=>{
          localStorage.clear('token');
          store.dispatch('setAuth',false);
          router.go('/');
        });
      };

      return{
        auth,
        logout,
      }
    }
  }
  </script>
  
  <style scoped>
  .logo {
    font-weight: 600;
    font-size: 1.5rem;
    margin-left: 30px;
  }
  .fontcolour{
    color: white;
  }
  </style>
  
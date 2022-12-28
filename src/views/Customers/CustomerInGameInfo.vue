<template>
  <br />
  <br />
  <div class="row justify-start">
      <div class="flex xs1">
        <h1 class="item">User Infomation</h1>
        <va-divider />
      </div>
    </div>
     <div class="va-table-responsive">
    <table class="va-table">
      <thead>
      <tr>
        <th>user Name</th>
        <th>User Class</th>
        <th>Guild Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(gameInfo, index) in inGameInfo" :key="index">
        <td>{{gameInfo.userName}}</td>
        <td v-if="(gameInfo.userClass===1)">Sovereign</td>
        <td v-if="(gameInfo.userClass===2)">Knight</td>
        <td v-if="(gameInfo.userClass===3)">Elf</td>
        <td v-if="(gameInfo.userClass===4)">Magician</td>
        <td v-if="(gameInfo.userClass===5)">DarkElf</td>
        <td v-if="(gameInfo.userClass===6)">DragonKnight</td>
        <td v-if="(gameInfo.userClass===7)">Witchcraft</td>
        <td v-if="(gameInfo.userClass===8)">Warrior</td>
        <td v-if="gameInfo.guildName===''"> - </td>
        <td v-else>{{gameInfo.guildName}}</td>
      </tr>
      </tbody>
    </table>
  </div>
    
</template>

<script lang="ts">
import { onMounted, ref } from '@vue/runtime-core';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
    name:"CustomerInGameInfoPage",

    setup() {
        const inGameInfo = ref([]);
        const route = useRoute();  

        onMounted(async () => {
            const targetId = route.params.id;
            
            await axios.get('https://localhost:7072/Customer/GetCustomerInGameInfo/', 
            {
                params : 
                {
                    id : targetId
                }
            })
            .then((result)=>{
                inGameInfo.value = result.data;
            });
        });
        return {
            inGameInfo,
        }
    },
}
</script>

<style>

</style>
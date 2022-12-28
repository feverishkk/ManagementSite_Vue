<template>
    <div class="va-table-responsive">
    <table class="va-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Department Number</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in userInfo" :key="index">
        <td>{{user.givenName}}</td>
        <td>{{user.department}}</td>
        <td>{{user.departmentNumber}}</td>
      </tr>
      </tbody>
    </table>
  </div>

  <br />
  <br />

  <h2 style="float:left"> TO </h2>

  <br/>
  <br/>

  <div class="va-table-responsive">
    <table class="va-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Department Number</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
            <va-input class="mb-4" v-model="userInput.givenName" label="givenName" placeholder="givenName" />
        </td>
        <td>
            <va-input class="mb-4" v-model="userInput.department" label="department" placeholder="department" /> 
        </td>
        <td>
            <va-input class="mb-4" v-model="userInput.departmentnumber" label="departmentnumber" placeholder="department" /> 
        </td>
      </tr>
      <va-button @click="onUpdate"> Update </va-button>
      </tbody>
    </table>
  </div>

</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        
        const userInfo = ref([]);
        const userInput = reactive({
            id:-1,
            givenName: '',
            department:'',
            departmentNumber:''
        });
        const route = useRoute();
        const userId = route.params.id;
        const router = useRouter();

        onMounted( async () => {
            await axios.get('https://localhost:7072/Managers/GetManagerById?id='+userId).then((result)=>{
                userInfo.value = result.data;
            });
        });

        const onUpdate = async () => {
            userInput.id = userId;
            await axios.post('https://localhost:7072/Managers/UpdateManagerInfo', userInput).then(()=>{
                router.push('/managerlist');
            });
        };

        return {
            userInfo,
            userInput,
            onUpdate,
        }
    },
}
</script>

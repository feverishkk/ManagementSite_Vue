<template>
    <div class="va-table-responsive">
    <table class="va-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in userRole" :key="index">
        <td>{{user.givenName}}</td>
        <td>{{user.email}}</td>
        <td>{{user.role}}</td>
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
        <th>Role</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
            <va-select class="formdesign" label="Roles" v-model="model.SelectedRole" :options="userRoles" clearable />
        </td>
      </tr>
      <va-button @click="OnUpdate"> Update </va-button>
      </tbody>
    </table>
  </div>

</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';

export default {

    setup() {
        const userRole = ref([]);
        const route = useRoute();
        const userId = route.params.id;
        const userRoles = reactive([
            'SuperAdministrator', 'ServerAdministrator', 'Basic'
        ]);
        const model = reactive({
            Id: -1,
            SelectedRole: '',
        });
        const router = useRouter();

        onMounted(()=>{
            axios.get('https://localhost:7072/Managers/GetManagerRole?id='+userId).then((result)=>{
                userRole.value = result.data
            });
        });

        const OnUpdate = () => {
            model.id = userId;
            axios.post('https://localhost:7072/Managers/UpdateManagerRole', model).then(()=>{
                router.push('/managerList');
            });
        };

        return {
            userRole,
            userId,
            userRoles,
            model,
           OnUpdate
        }
    },
}
</script>
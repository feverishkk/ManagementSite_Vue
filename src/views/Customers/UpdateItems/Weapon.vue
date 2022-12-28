<template>
    <div>
      <va-card>
         <va-card-title>Weapon</va-card-title>
        <va-card-content>
             <Dropdown v-model="model.SelectedItem" :options="itemList" optionLabel="name" placeholder="Select an item" />
             <br /> <br />
             <va-button @click="OnUpdateButton" > Update </va-button>
         </va-card-content>
         
       </va-card>
    </div>
</template>

<script lang="ts">
import { reactive, ref } from '@vue/reactivity';
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import {useRouter} from 'vue-router';
import { useStore } from 'vuex';
import {getCurrentInstance} from 'vue'

export default {
  name:"TotalWeapon",

  setup() {
    const itemList = ref([]);
    const selectedItem = ref(0);
    const model = reactive({
      CustomerId: '',
      ItemName:'',
      SelectedItem : -1,
      ManagerId : '',
    });
    
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const componentName = getCurrentInstance()?.type.name

    onMounted(async () => {
      await axios.get('https://localhost:7072/GetItem/GetAllWeapons').then((result)=>{
        itemList.value = result?.data
      });
    });

    const OnUpdateButton = async () => {
      model.CustomerId = route.params.id as string;
      model.ItemName = componentName as string;
      model.ManagerId = store.state.userEmail as string;

      const myValue = JSON.parse(JSON.stringify(model.SelectedItem));
      model.SelectedItem = myValue.totalWeaponId;

      if(model.ManagerId === '' || model.ManagerId === undefined || model.SelectedItem === undefined || model.SelectedItem == -1){
        store.dispatch('setAuth',false);
        localStorage.clear();
        router.push('/login');
      }
      
      await axios.post('https://localhost:7072/Customer/UpdateCustomerEquipment', model).then(()=>{
        
        router.push('/customer/customerlist');
      });
      
    }

    return {
      itemList,
      model,
      selectedItem,
      OnUpdateButton,
    }
  },
}
</script>
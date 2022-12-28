<template>
     <div>
      <va-card>
         <va-card-title>Armor</va-card-title>
        <va-card-content>
             <Dropdown v-model="selectedItem" :options="itemList" optionLabel="name" placeholder="Select an item" />
             <br /> <br />
            <va-button @click="OnUpdateButton" > Update </va-button>
         </va-card-content>
       </va-card>
    </div>
</template>
    

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';
import useUpdate from '@/views/Customers/Composables/OnUpdate';

export default {
  name:"Armor",
  setup() {
    const itemList = ref([]);
    const selectedItem = ref(-1);

    onMounted(async () => {
        await axios.get('https://localhost:7072/GetItem/GetAllArmors').then((result)=>{
            itemList.value = result.data
        });
    });

    const {OnUpdateButton} = useUpdate(selectedItem);

    return {
        itemList,
        selectedItem,
        OnUpdateButton,
    }
  },
}
</script>
<template>
<div>
      <va-card>
         <va-card-title>Boots</va-card-title>
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
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import useUpdate from '@/views/Customers/Composables/OnUpdate';
export default {
  name:"Boots",
  setup() {
    const itemList = ref([]);
    const selectedItem = ref(-1);

    onMounted(async ()=>{
      await axios.get('https://localhost:7072/GetItem/GetAllBoots').then((result)=>{
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

  methods:{

  }
}
</script>
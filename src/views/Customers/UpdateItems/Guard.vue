<template>
  <div>
        <va-card>
          <va-card-title>Guard</va-card-title>
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
  name:"Guard",
  setup() {
    const itemList = ref([]);
    const selectedItem = ref(-1);

    onMounted(async()=>{
      await axios.get('https://localhost:7072/GetItem/GetAllGuards').then((result)=>{
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
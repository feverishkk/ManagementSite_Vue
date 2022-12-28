<template>
  <DataTable :value="logs" :paginator="true" :rows="15"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[15, 30, 100]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <Column header="#" headerStyle="width: 3em">
              <template #body="{ index }">{{ index+1 }}</template>
            </Column>
            <Column field="managerUser" header="Manager User"></Column>
            <Column field="customerUser" header="Customer User"></Column>
            <Column field="itemName" header="Item Variety"></Column>
            <Column field="itemNumber" header="Item Number"></Column>
            <Column field="fullPath" header="Full Path"></Column>
            <Column field="host" header="Host"></Column>
            <Column field="port"  header="Port"></Column>
            <Column field="remoteIpAddress"  header="Remote Ip Address"></Column>
            <Column field="method"  header="Method"></Column>
            <Column field="statusCode"  header="Status Code"></Column>
            <Column field="updateTime"  header="Update Time"></Column>
          
  </DataTable>    
</template>
  

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';

export default {
  setup() {
    const logs = ref([]);
      onMounted(async ()=>{
        await axios.get('https://localhost:7072/Log/GetAllLog').then((result)=>{
          logs.value = result.data;
        });
      });

    return {
      logs,
    }
  },
}
</script>

<style scoped>
.table-example--pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
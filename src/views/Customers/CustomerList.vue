<template>

<DataTable :value="customers" :paginator="true" :rows="15"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[15,30,100]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <Column field="userId" header="Index"></Column>
            <Column field="id" header="Id"></Column>
            <Column field="userName" header="User Name"></Column>
            <Column field="emailAddress" header="Email Address"></Column>
            <Column field="memberSince"  header="Member Since"></Column>
            <Column field="country"  header="Country"></Column>
            <Column  header="Options">
              <template #body="slotProps">
                <router-link :to="`/customer/customeringameinfo/${slotProps.data.id}`" text="CustomerInGameInfo" />
              </template>
            </Column>
</DataTable>

</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';

export default {
    name:"CustomerListPage",

    setup(){
        const customers = ref([]); 
        
        onMounted(async () => {
            await axios.get('https://localhost:7072/Customer/GetAllCustomers')
                       .then((result) => {
                        customers.value = result.data;
                });
        });

        return {
            customers,
        }
    },

}
</script>
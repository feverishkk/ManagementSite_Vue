import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Chart from 'primevue/chart/Chart.vue';
import Paginator from 'primevue/paginator';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const app = createApp(App);
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);
app.component('Chart', Chart);
app.component('Paginator',Paginator);
app.component('DataTable',DataTable);
app.component('Column',Column);

app.use(createVuestic())
   .use(PrimeVue)
   .use(store)
   .use(router)
   .mount('#app')




<template>
    <div class="row">
        <h2> Customer Accumulated Number </h2> &nbsp; &nbsp; &nbsp; 
        <h2> until <span style="color:red"> 31.Oct.2022 </span> total <span style="color:red;"> {{ this.amountOfUser }} </span>  are exists </h2>
        <Chart type="line" :data="basicData" :options="basicOptions" style="height:500px; width:2000px;" />
    </div>
</template>

<script>
import axios from 'axios';
import _ from "lodash";
export default{
    data() {
        return {
            amountOfUser: 0,
            basicData: {
                labels: [],
                datasets: [
                    {
                        label: 'Registered Year',
                        data: [],
                        fill: false,
                        borderColor: '#42A5F5',
                        tension: .4
                    },
                    {
                        label: 'Amount of People',
                        data: [],
                        fill: false,
                        borderColor: '#FFA726',
                        tension: .4
                    }
                ]
            },
            basicOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            },
        }
    },

    mounted: function(){
        this.getData();
    },

    methods:{
        getData: function() {
            axios.get('https://localhost:7072/Chart/GetMemberSince').then((result)=>{
                const data = result.data;

                for(let i = 0; i <= data.length; i++) {
                    this.basicData.datasets[i].data = data.map(x=>x.number);
                    this.amountOfUser = _.sum(this.basicData.datasets[i].data);
                    this.basicData.labels = data.map(x=>x.registeredYear);
                }
            });
        }
    }
}
</script>

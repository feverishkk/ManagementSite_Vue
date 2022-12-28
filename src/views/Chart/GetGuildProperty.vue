<template>
    <div >
        <div class="row" >
            <h2> Guild Properties </h2> <h2 class="ml-3"> There are <span style="color: red;"> {{ this.totalGuildAmount }} </span> guilds exist </h2>
            <br />
            <br />
            <Chart type="bar" :data="basicData" :options="horizontalOptions" style="width:2000px; height:800px" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
        data(){
            return{
                totalGuildAmount: 0,
                basicData: 
                {
                    labels: [],
                    datasets: [
                        {
                            label: 'Guild Total Number',
                            backgroundColor: '#42A5F5',
                            data: [], 
                        }
                    ]
                },
                horizontalOptions: {
                indexAxis: 'y',
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

        methods: {
            getData: function(){
                    axios.get('https://localhost:7072/Chart/GetGuildProperty').then((result)=>{
                    const temp = result.data;

                    const data = JSON.parse(JSON.stringify(temp));
                    for(let i =0; i <= data.length; i++) {
                        this.totalGuildAmount = temp.length;
                        this.basicData.labels = data.map(x=>x.guildName);
                        this.basicData.datasets[i].data = data.map(x=>x.totalAmount);
                        
                    }
                });
            }
        },

        mounted: function(){
            this.getData();
        },

}

</script>
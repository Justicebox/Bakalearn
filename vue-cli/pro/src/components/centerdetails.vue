<template>
    <div class="details">
        <div class="container clear">
            <div class="detaleft">
                <div><img src="../assets/images/1.png" alt=""></div>
                <ul>
                    <li v-for="(value,index) in mydata">
                        <router-link :to="{path:`/Home/qcenter/centerdetails/${value.name}`,query:{id:index},activeClass: 'nav-active'}">{{value.text}}</router-link>
                    </li>
                    <!-- <li ref='box1' ><router-link :to="{path:'/Home/qcenter/centerdetails/detailscount',activeClass: 'nav-active'}">数据统计</router-link></li>
                    <li ref='box2' ><router-link :to="{path:'/Home/qcenter/centerdetails/detailsfore',activeClass: 'nav-active'}">数据预测</router-link></li>
                    <li ref='box3' ><router-link :to="{path:'/Home/qcenter/centerdetails/detailsanalysis',activeClass: 'nav-active'}">流量分析</router-link></li>
                    <li ref='box4' ><router-link :to="{path:'/Home/qcenter/centerdetails/detailsrelease',activeClass: 'nav-active'}">广告发布</router-link></li>   -->
                </ul>   
                
            </div>
            <div class="detaright">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    // import $ from 'jquery'
    export default {
        data() {
            return {
                id:0,
                mydata:[
                    {
                        text:'数据统计',
                        name:'detailscount'
                    },
                    {
                        text:'数据预测',
                        name:'detailsfore'
                    },
                    {
                        text:'流量分析',
                        name:'detailsanalysis'
                    },
                    {
                        text:'广告发布',
                        name:'detailsrelease'
                    }
                ]
            }
        },
        methods: {
           getData(){
                
           }
        },
        created() {
            this.id = this.$route.query.id;//获取上个页面传递的id,在下面获取数据的时候先提交id
            
        },
       
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #f0f2f5;
    }
    li{
        list-style: none;
    }
    .clear::after{
        content: "";
        display: block;
        clear: both;
    }
    .details{
        padding-top: 15px;
        height: 100%;
    }
    .detaleft{
        width: 270px;
        float: left;
        background-color: #fff;
    }
    .detaleft li{
        line-height: 35px;
        text-align: left;
        width: 270px;
    }
    .detaleft li a{
        color: #000;
        display: inline-block;
        width: 210px;
        padding: 0 30px;
    }
    .active{
        background-color: #4fc08d;
    }
    .detaright{
        width: 900px;
        margin-left: 15px;
        float: left;
        background-color: #fff;
    }
    .detaleft .nav-active{
        background-color: #4fc08d;
        color: #fff !important;
    }
</style>
<template>
    <router-view></router-view>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.sel{
        color:#fff !important;
        background-color: #1E282C !important;
        border-left: 3px solid #00A65A !important;
    }
    a{text-decoration:none}
    a:hover{
        color: #A9A9A9;
    }
    html{
        font-size: 62.5%;
    }
    .content{
        width: 100%;
        position: absolute;
        top: 90px;
        left: 0;
        bottom: 0;
        background-color: #ECF0F5;
        overflow: hidden;
        padding-top: 15px;
    }
    .container{
        width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .mainnav{
        width: 270px;
        height: 100%;
        cursor: pointer;
        float: left;
        margin-left: 15px;
        text-align: left;
    }
    .mainnav h2{
        margin: 0;
        padding: 0 15px;
        height: 32px;
        line-height: 32px;
        background-color: #4fc08d;
        color: #fff;
        font-size: 14px;
    }
    .mainnav h1{
        margin: 0;
        font-size: 12px;
        padding: 0 15px;
        height: 32px;
        line-height: 32px;
    }
    .mainnav ul{
        padding-left: 15px;
    }
    .mainnav ul li{
        list-style: none;
        line-height: 15px;
        margin: 5px 0;
    }
    .mainnav .navtop{
        background-color: #fff;
        padding-bottom: 15px;
    }
    .mainnav .navcent{
        margin-top: 15px;
        background-color: #fff;
        height: 100%;
    }
    .qshop{
        width: 900px;
        background-color: #ECF0F5;
        float: right;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        /* opacity: 0.75; */
        line-height: 500px;
        margin: 0;
    }
  
    .el-carousel__item:nth-child(3) {
        background-image: url('../assets/slideShow/pic1.jpg');
        background-size: cover;
    }
    
    .el-carousel__item:nth-child(4) {
        background-image: url('../assets/slideShow/pic2.jpg');
        background-size: cover;
    }
    .el-carousel__item:nth-child(5) {
        background-image: url('../assets/slideShow/pic3.jpg');
        background-size: cover;
    }
    .el-carousel__item:nth-child(6) {
        background-image: url('../assets/slideShow/pic4.jpg');
        background-size: cover;
    } 
    .el-carousel__container{
        height: 500px !important;
    }
    .el-carousel__indicators--outside{
        position: absolute !important;
        bottom: 0px !important;
        width: 100% !important;
        left: 0px !important;
        background-color: rgba(0,0,0,.5);
        line-height: 23px !important;
        height: 23px !important;
    }
    .el-carousel{
        overflow: hidden;
    }
    .outtxt{
        width: 900px;
        height: 166px;
        margin-top: 15px;
    }
    .out_com{
        width: 442px;
        height: 166px;
        background-color: #fff;
        float: left;
    }
    .out_com:nth-child(2){
        margin-left: 15px; 
    }
    .out_left{
        width: 140px;
        height: 166px;
        float: left;
    }
    .out_left img{
        margin-top: 22px;
    }
    .out_right{
        width: 302px;
        height: 166px;
        float: right;
        text-align: left;
    }
    .out_right .padd{
        padding: 18px 0px;
    }
    .out_right h2{
        font-size: 18px;
        line-height: 32px;
    }
    .out_right p{
        font-size: 14px;
        line-height: 20px;
    }
    .out_right .el-button{
        position: absolute;
        margin-top: 12px;
        background-color: #4fc08d !important;
        color: #fff !important;
    }
</style>
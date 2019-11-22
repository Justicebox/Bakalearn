<template>
        <!-- 头部 -->
    <header class="main-header">
        <div class="container"> 
            <div class="q-nav">                                   
                <div class="q-entrance">                       
                   
                    <!-- <span class="entrances">
                        <router-link :to="'/Home'">桌面</router-link>
                    </span> -->
                    <!-- <i class="el-icon-s-tools"></i>
                    <i class="el-icon-menu"></i>
                    <i class="el-icon-s-finance"></i> -->
                    <div>
                         <el-link style="position: absolute;right: 200px;
    top: -15px;color:orange;" href="" target="_blank">你好！八哥哥哥哥</el-link>
                    </div>
                    <el-button id="qiehuan" type="warning">切换到供应商</el-button>
                    <div>
                        <el-avatar src="../assets/new-logo.png" style="width:65px;height:65px;linr-height:65px;"></el-avatar>
                    </div>
                    <!-- 退出到登录页面 -->
                    <div class="manager">                          
                        <template>
                            <el-button id="exit" type="text" @click="open2">退出</el-button>
                        </template>
                    </div>
                </div> 
            </div>
        </div>             
    </header>
</template>
    
<script>
    export default {
        data(){
            return {
                title: ''
            }
        },
        methods:{     
            open2() {
                let _this = this
                this.$confirm('是否退出登录', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // sessionStorage.removeItem("token")
                    _this.$router.push({path:'/login'})

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });          
                });
            }
    
          },
          components:{

          }  
    }
</script>
    
<style>
    *{
        margin: 0;
        padding: 0;
    }
    a{text-decoration:none !important;}
    a:hover{
        color: #A9A9A9;
    }
    .container{
        width: 100%;
        margin: 0 auto;
    }
    .q-wrap{
        width: 100%;
        height: 90px !important;
        border-bottom: solid 4px #999;
        /* background-color: #363636; */
        text-align: center;
        line-height: 90px;
    }
    .main-header>.container>a{
        /* width: 12%; */
        height: 90px;
        float: left;
    }
    .main-header>.container>a img{
        width: 100%;
        max-width: 53px;
        height: 48px;
        margin: 21px 0 0 0px;
    }
    .q-nav{
        text-align: center;
        height: 90px;
    }
    .q-title{
        margin: 0 auto;     
        color: #b2b2b2;
        display: inline-block;
        line-height: 90px;   
        font-size: 20px;
    }
    .entrances{
        float: left;
    }
    .entrances>a{
        color:#b2b2b2;
        font-size: 14px;
    }
    .entrances>a:hover{
        color: #fff;
    }
    .q-entrance{
        margin-right: 35px;
        float: right;
        width: 1000px;
    }
    .q-entrance>span>a{
    
        line-height: 50px;
    }
    .manager{
        float: right;
    }
    /* .el-button{
        color: #000 !important;
    }
    .el-button:hover{
        color: #fff !important;
    } */
    .el-avatar{
        float: right;
       
            position: absolute;
    right: 88px;
    top: 10px;
    }
    #qiehuan {
    position: absolute;
    right: 190px;
    top: 45px;
    height: 30px;
    line-height: 8px;
    color: #fff;
    }
    #exit{
        color: #000;
        font-size: 16px;
    }
</style>
     
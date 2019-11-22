<template>
    <el-container style="height:500px;width:100%;">
        <el-aside style="width:200px;text-align: left;height:910px;margin-top:-130px;background-color: rgb(84, 92, 100)">
            <a  class="logo1 ">
                <img src="../assets/new-logo.png" alt="" class="baiyi" style="width:170px;height:120px;margin-top:50px;margin-bottom: -20px;">
            </a> 
            <el-menu
                :default-active="this.$router.path"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>
                
                
                <el-submenu index="1" style="">
                    <template slot="title">
                    <i class="el-icon-data-line"></i>
                    <span>采购价格看板管理</span>
                    </template>
                    <el-menu-item-group>
                    <el-menu-item index="/home">发布物料</el-menu-item>
                    <el-menu-item index="/home/userManagement">物料管理</el-menu-item>
                    <el-menu-item >报价看板</el-menu-item>
                    <el-menu-item >购物车</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title" style="margin-left:-58px;">
                    <i class="el-icon-takeaway-box"></i>
                    <span>商品管理</span>
                    </template>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                    <i class="el-icon-shopping-cart-1"></i>
                    <span>订单管理</span>
                    </template>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                    <i class="el-icon-star-off"></i>
                    <span>收藏管理</span>
                    </template>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                    <i class="el-icon-office-building"></i>
                    <span>企业信息</span>
                    </template>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                    <i class="el-icon-office-building"></i>
                    <span>注册开户</span>
                    </template>
                </el-submenu>
                <el-submenu index="7" style="margin-bottom:100px;">
                    <template slot="title">
                    <i class="el-icon-office-building"></i>
                    <span>信息管理</span>
                    </template>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

    
</template>
<style  scoped>
.el-submenu [class^=el-icon-]{
    margin-right: 15px;
}
.el-menu{
    overflow: hidden;
}
::-webkit-scrollbar{
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-thumb{
    background-color: #a1a3a9;
    border-radius: 3px
}
.el-main{
    padding:20px 6px;
}
.el-icon-arrow-down{
    display: none;
}
</style>
<template>
    <el-container style="height:500px;border:1px solid #eee">
        <el-aside style="width:200px;background:rgb(238,241,238)">
            <el-menu
                :default-active="this.$router.path"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>用户分析</span>
                    </template>
                    <el-menu-item-group>
                    
                    <el-menu-item index="/home/dataCount">数据统计</el-menu-item>
                    <el-menu-item index="/home/userManagement">用户管理</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
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
</style>
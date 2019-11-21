<template>
  <div class="box">
    <el-container style="height: 700px;">
      <el-aside style="width:200px; background:#545C64;">
        <el-menu
          :default-active="this.$router.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-openeds="['1']"
          router
        >
          <div class="logo">
            <div class="wz">
              <img src="../assets/hedelogo.png" alt />
            </div>
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>用户分析</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/dataCount">发布物料</el-menu-item>
              <el-menu-item index="/home/form">物料管理</el-menu-item>
              <el-menu-item index="/home/userManagement">报价看板</el-menu-item>
              <el-menu-item index="/home/userManagement">购物车</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">收藏管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">企业信息</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">注册开户</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-menu"></i>
            <span slot="title">支付管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="height:80px;text-align: right; font-size: 12px">
          <div class="more" style="float:left;">
            <a href class="el-icon-s-unfold" style="color:#333;font-size:20px"></a>
          </div>
          <div class="right" style="float:right;">
            <div class="right1">
              <div class="left-tb">
                <a href class="left-a">
                  <div class="topdiv">
                    <span class="el-icon-menu tu"></span>
                  </div>
                  <div class="bottomdiv">
                    <span class="zi">产品服务</span>
                  </div>
                </a>
              </div>
              <div class="left-tb">
                <a href class="left-a">
                  <div class="topdiv">
                    <span class="el-icon-s-cooperation tu"></span>
                  </div>
                  <div class="bottomdiv">
                    <span class="zi">工作台</span>
                  </div>
                </a>
              </div>
              <div class="left-tb">
                <a href class="left-a">
                  <div class="topdiv">
                    <span class="el-icon-house tu"></span>
                  </div>
                  <div class="bottomdiv">
                    <span class="zi">工作台</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="right1">
              <div class="yh">
                <div class="yh-hi">
                  <a href>你好! change</a>
                </div>
                <div class="yh-qh">
                  <a href>切换到供应商</a>
                </div>
              </div>
              <div class="yh">
                <div class="yh-head">
                  <a href class="tx"></a>
                </div>
              </div>
              <div class="yh">
                <div class="yh-hi">
                  <a class="el-icon-error tc" @click="open2"></a>
                </div>
                <div class="yh-qh">
                  <span @click="open2">退出</span>
                </div>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    open2() {
      let _this = this;
      this.$confirm("是否退出登录", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          _this.$router.push({ path: "/login" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  },
  components: {}
};
</script>

<style scoped>
.topdiv {
  text-align: center;
  height: 16px;
}
.bottomdiv {
  text-align: center;
  height: 20px;
}
.left-tb {
  float: left;
  margin: -6px 40px 0px 0px;
}
.left-tb a {
  color: #333;
}
.tu {
  font-size: 24px;
}
.right1 {
  float: left;
  width: 260px;
}
.yh {
  float: left;
  height: 80px;
}
.yh-hi {
  margin: -20px 0 0 0;
  height: 30px;
  text-align: center;
}
.yh-hi a {
  color: #f18d00;
  font-size: 14px;
}
.yh-qh a {
  background: #f18d00;
  padding: 6px;
  color: #fff;
  border-radius: 5px;
}
.yh-head {
  width: 60px;
  height: 60px;
  margin: 0 10px;
  padding: 10px;
}
.tx {
  display: block;
  height: 60px;
  width: 60px;
  background: orange;
  border-radius: 50px;
}
.yh-hi .tc {
  font-size: 22px;
  height: 20px;
  margin: 38px 0 0px 0;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none !important;
}
.el-header {
  background-color: #fff;
  border-bottom: 4px solid #e7eaeb;
  color: #333;
  line-height: 80px;
}

.el-aside {
  color: #333;
}
.el-menu {
  background: #222d32;
}
.logo {
  width: 200px;
  padding-top: 16px;
  height: 100px;
  background: #545c64;
}
.wz {
  width: 120px;
  height: 80px;
  background: #fff;
  margin: 0 auto;
}
.wz img {
  margin: 8px 0px 0 9px;
}
.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
  padding: 0 45px;
  min-width: 200px;
}
.el-menu-item,
.el-submenu__title {
  height: 50px;
  line-height: 50px;
}
</style>

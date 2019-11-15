<template>
  <div class="firstdemo">
    <el-form ref="form" :model="form" label-width="100px">
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label-width="70px">
            <span>
              <font color="pink" size="3">登录注册页面</font>
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="用户名：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="密码：">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登陆</el-button>
            <el-button>注册</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "firstdemo",
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    succ() {
      this.$message({
        message: "登陆成功",
        type: "success"
      });
    },
    erro() {
      this.$message.error("自己查查看哪错了");
    },
    onSubmit() {
      let data = {
        userName:this.form.name,
        passWord:this.form.password
      }
      let _this = this
      this.$axios
      .post("http://rap2api.taobao.org/app/mock/227246/login",data)
      .then( res => {
        // console.log(res.data)
        if (res.data.responseCode==0) {
          _this.succ()
          _this.$router.push({path:'/Home'})
        }
        sessionStorage.setItem("token",res.data.token)

      })
      .catch( error => {
        console.log(error)
        _this.erro()
      })
      
    },
    get(){
      if (sessionStorage.getItem("token")) {
        this.$router.push({path:'/Home'})
      }
    }
  },
  created(){
    this.get()
  }
};
</script>

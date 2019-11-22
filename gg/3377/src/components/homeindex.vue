<template>
    
  <div class="box" style="height: 1500px;">
    <div class="first">
      <!-- //面包屑 -->
       <el-breadcrumb separator-class="el-icon-arrow-right" >
        <el-breadcrumb-item :to="{ path: '/' }">企业工作台</el-breadcrumb-item>
        <el-breadcrumb-item>采购价格看板管理</el-breadcrumb-item>
        <el-breadcrumb-item>发布物料</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div></div>
    
    <div class="third">
      <!-- <el-tabs v-model="activeName" type="card" @tab-click="handleClick" 
        style="position:absolute;top:200px;width: 1600px;margin-left: 55px;">
        <el-tab-pane label="发布物料" name="first" style="bottom: 15px; height:1200px;"> -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
      <div style="background:#e5e4e6;">
        <el-form-item label="应用类" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入物料用途" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="物料类" prop="region">
          <el-select v-model="ruleForm.region1" placeholder="请选择原材料" class="material" disabled></el-select>
          <el-select
            v-model="ruleForm.region"
            placeholder="请选择大类"
            style="width:200px;"
            @change="updatect"
          >
            <el-option
              v-for=" (item,index) in arrAll"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
          <el-select
            v-model="ruleForm.region2"
            placeholder="请选择子类"
            style="width:200px;"
            @change="updateqq"
          >
            <el-option
              v-for=" (item,index) in ctarr"
              :key="index"
              :label="item.name"
              :value="item.name"
           
            ></el-option>
          </el-select>
          <el-select v-model="ruleForm.region3" placeholder="请选择小类" style="width:200px;">
            <el-option
              v-for=" (item,index) in qqarr"
              :key="index"
              :label="item.name"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料名称" prop="name">
          <el-input v-model="ruleForm.wname" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="截止时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date"
                style="width: 50%; float:left"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        </div>
        <div style="height:150px;background:#e5e4e6;">
  <el-form-item label="结算方式" prop="type">
    <div style="display: grid;
    position: absolute;
    margin-left: 15px;
    margin-top: 15px;">
    <el-radio v-model="radio" label="1" style="margin-bottom:20px;">现金电汇</el-radio>
    <el-radio v-model="radio" label="2" style="margin-bottom:20px;">承兑汇票</el-radio>
    <el-radio v-model="radio" label="3" style="margin-bottom:20px;">预付定金</el-radio>
    <el-radio v-model="radio" label="4" style="margin-right: 58px;">账期</el-radio>
    <el-input v-model="input" placeholder="请输入内容" style="height: 25px;
    position: absolute;
    margin-top: 94px;
    width:130px;
    margin-left: 100px;"></el-input>
    <span style="    position: absolute;
    margin-top: 96px;
    margin-left: 280px;">天</span>
      <el-select v-model="value" placeholder="请选择付还款方式" style="position: absolute;
    margin-top: 94px;
    margin-left: 330px;
    width: 200px;">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
  </el-form-item>
  </div>
      </el-form>
    </div>
    <!-- 二级菜单显示 -->
    <div class="fourth" v-if="ifShow" style="background:#e5e4e6;">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="需求量" prop="name">
          <el-input v-model="ruleForm.fname" placeholder="请输入物料用途" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="交换地点" prop="name">
          <el-input v-model="ruleForm.fname2" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="交换时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.fdate1"
                style="width: 50%; float:left"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="质量等级">
          <el-input v-model="ruleForm.fname1" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="包装方式">
          <el-input v-model="ruleForm.fname3" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="技术标准">
          <el-input v-model="ruleForm.fname4" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="fifth" v-if="ifShowChild">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div style="background:#e5e4e6;">
        <el-form-item label="需求量1" prop="name">
          <el-input v-model="ruleForm.finame" placeholder="请输入物料用途" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="交换地点" prop="name">
          <el-input v-model="ruleForm.fiplace" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="交换时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.fidate"
                style="width: 50%; float:left"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="质量等级">
          <el-input v-model="ruleForm.fitraval" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="包装方式">
          <el-input v-model="ruleForm.fiway" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
        <el-form-item label="技术标准">
          <el-input v-model="ruleForm.fibz" placeholder="请输入物料名称" style="width: 23%; float:left"></el-input>
        </el-form-item>
        </div>
      </el-form>
    </div>
    <el-row>
      <el-button type="warning" plain @click="publish()">发布 </el-button>
    </el-row>
    <!-- </el-tab-pane>
    <el-tab-pane label="批量添加" name="second"></el-tab-pane> </el-tabs> -->
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      //三级联动
      arrAll: [
        { name: "", sub: [] },
        {
          valu: "1",
          name: "钢材",
          sub: [
            { name: "", sub: [] },
            {
              name: "铁",
              sub: [{ name: "铜" }, { name: "铜1" }, { name: "铜1" }]
            },
            {
              name: "铁2",
              sub: [{ name: "铜" }, { name: "铜1" }, { name: "铜1" }]
            },
            {
              name: "铁3",
              sub: [{ name: "铜" }, { name: "铜1" }, { name: "铜1" }]
            }
          ]
        },
        {
          valu: "2",
          name: "锌材",
          sub: [
            { name: "", sub: [] },
            {
              name: "铁",
              sub: [{ name: "铜" }, { name: "铜1" }, { name: "铜1" }]
            }
          ]
        },
        {
          valu: "3",
          name: "材",
          sub: [
            { name: "", sub: [] },
            {
              name: "铁",
              sub: [{ name: "铜" }, { name: "铜1" }, { name: "铜1" }]
            }
          ]
        }
      ],
      ctarr: [],
      prov: "",
      qqarr: [],
      //third
      ruleForm: {
        name: "",
        wname:"",
        region: "",
        region2: "",
        region3: "",
        date: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        fname:"",
        fname1:"",
        fname2:"",
        fname3:"",
        fname4:"",
        fdate:"",
        finame:"",
        fiplace:"",
        fidate:"",
        fitraval:"",
        fiway:"",
        fibz:"",
    
      },
      radio:'1',
      input:'',
      value:'',
      //规则
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ]
      },
      value: "",
      //v-if
      ifShow: false,
      ifShowChild: false,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        },]
    };
  },
  methods: {
    publish(){
      var obj=this.ruleForm
        this.$router.push({
          path:"/home/userManagement",
          query:obj
        })
        console.log(obj.date)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("发布成功!");
        } else {
          console.log("发布失败 !!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //二级菜单
    updatect: function() {
      var self = this;
      this.arrAll.forEach(function(item, index) {
        if (item.name == self.ruleForm.region) {
          self.ctarr = item.sub;
          console.log(self.ctarr);
          //第一集显示
          self.ifShow = true;
          //  第二级隐藏
           self.ifShowChild = false;
        }
      });
      this.ruleForm.region2 = "";
      this.ruleForm.region3 = "";
    },
    //三级菜单
    updateqq: function() {
      var self = this;
      this.ctarr.forEach(function(item, index) {
        if (item.name == self.ruleForm.region2) {
          self.qqarr = item.sub;
          console.log(self.qqarr);
          //第一集显示
          self.ifShow = true;
          //  第二级显示
           self.ifShowChild = true;
          //  if(ctarr =""){
          //    self.ifShowChild = false;
          //  }
        }
      });
      this.ruleForm.region3 = "";
    }
  
  }
};
</script>
 
<style scoped>
.box {
  padding: 0 30px;
}
.first {
  width: 100%;
  height: 30px;
  border-bottom: 2px solid #ccc;
  color: orange;
}
h3 {
  line-height: normal;
  float: left;
  font-weight: bold;
  padding-left: 10px;
  padding-bottom: 20px;
}
.third,.fourth,.fifth {
  margin-top: 15px;
}
.fifth{
  margin-top: 0;
}
.material {
  float: left;
}
.way {
  float: left;
  margin-top: 12px;
}
.el-container{
  height: 1500px;
}

</style>
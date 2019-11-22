<template>
    <el-container style="width:100%;">
        <el-breadcrumb separator-class="el-icon-arrow-right" >
        <el-breadcrumb-item :to="{ path: '/' }">企业工作台</el-breadcrumb-item>
        <el-breadcrumb-item>采购价格看板管理</el-breadcrumb-item>
        <el-breadcrumb-item>发布物料</el-breadcrumb-item>
        </el-breadcrumb>

        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" 
        style="position:absolute;top:200px;width: 1600px;margin-left: 55px;">
        <el-tab-pane label="发布物料" name="first" style="bottom: 15px; height:1200px;">
                
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" 
 class="demo-ruleForm" style="height:800px;margin-top:20px;">
  <div style="background:#e5e4e6;margin-bottom:20px; height:255px;">
  <el-form-item label="应用类" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入物料用途、使用场景" style="width: 300px;
    right: 585px;"></el-input>
  </el-form-item>
  <el-form-item label="物料类" prop="region">
    <el-select v-model="ruleForm.region" placeholder="原材料" style="width: 250px;
    margin-left: -569px;">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-select v-model="ruleForm.region" placeholder="请选择大类">
      <el-option label="钢材" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-select v-model="ruleForm.region" placeholder="请选择子类">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-select v-model="ruleForm.region" placeholder="请选择小类">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="物料名称" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入物料名称" style="width: 300px;
    right: 585px;"></el-input>
  </el-form-item>
  <el-form-item label="截止日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="请选择截止日期" v-model="ruleForm.date1" style="width: 300px;right: 180px;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="11">
    </el-col>
  </el-form-item>
  </div>
  <div style="background:#e5e4e6;margin-bottom:20px; height:355px;">
    <el-form-item label="需求量" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入物料用途、使用场景" style="width: 300px;
    right: 585px;"></el-input>
  </el-form-item>
  <el-form-item label="交货地点" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入物料用途、使用场景" style="width: 300px;
    right: 585px;"></el-input>
  </el-form-item>
  <el-form-item label="交货时间" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入物料用途、使用场景" style="width: 300px;
    right: 585px;"></el-input>
  </el-form-item>
  <el-form-item label="质量等级" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入物料用途、使用场景" style="width: 300px;
    right: 585px;"></el-input>
  </el-form-item>
  <el-form-item label="包装方式" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入物料用途、使用场景" style="width: 300px;
    right: 585px;"></el-input>
  </el-form-item>
  <el-form-item label="技术标准" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入物料用途、使用场景" style="width: 300px;
    right: 585px;"></el-input>
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

  <el-form-item>
    <el-button style="position: absolute;
    left: -70px;
    margin-top: 130px;" type="primary" @click="submitForm('ruleForm')">发布</el-button>
  </el-form-item>
</el-form>

    </el-tab-pane>
    <el-tab-pane label="批量添加" name="second"></el-tab-pane> </el-tabs>
 </el-container>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         radio: '1',
         input: '',
         value:"",
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
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
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('发布成功!');
          } else {
            console.log('发布失败 !!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }

    }
  };
</script>
<style lang="stylus" scoped>
    .el-breadcrumb {
        font-size:18px;
        line-height :60px;
        text-align: left;
        margin-left:60px;
        border-bottom:solid 3px #666;
        position: absolute;
        width:85%;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav {
        height:60px;
    }
    .el-tabs__content{
      height :800px;
    }
    .el-input__inner{
      height:25px !important;
    }
</style>
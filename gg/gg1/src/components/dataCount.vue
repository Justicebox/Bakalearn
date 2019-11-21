<template>
  <div class="box">
    <!-- 面包屑 -->
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 三级联动 -->
    <div class="form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        size="small"
      >
        <el-form-item class="teshu" label="应用类" prop="app">
          <el-input v-model="ruleForm.app"></el-input>
        </el-form-item>
        <el-form-item label="物料类" prop="materiel">
          <el-select :disabled="true" v-model="ruleForm.materiel" placeholder="原材料">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>

          <el-select v-model="value1" placeholder="请选择" @change="one">
            <el-option v-for="(item) in big" :key="item.index" :value="item.bigtit"></el-option>
          </el-select>
          <el-select v-model="value2" placeholder="请选择" @change="two">
            <el-option
              v-for="(item) in center0"
              :key="item.index"
              :value="item.centertit"
              :label="item.centertit"
            ></el-option>
          </el-select>
          <el-select v-model="value3" placeholder="请选择">
            <el-option
              v-for="(item) in small0"
              :key="item.index"
              :value="item.smalltit"
              :label="item.smalltit"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="teshu" label="物科名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="截止日期" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <!-- 第二部分 -->
    <div class="place" v-if="yincang">
      <div class="left">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="small"
        >
          <el-form-item class="teshu zuo" label="产地" prop="chandi">
            <el-input v-model="ruleForm.chandi"></el-input>吨
          </el-form-item>
          <el-form-item class="teshu zuo" label="厚度" prop="houdu">
            <el-input v-model="ruleForm.houdu"></el-input>
          </el-form-item>
          <el-form-item class="teshu zuo" label="宽度" prop="kuandu">
            <el-input v-model="ruleForm.kuandu"></el-input>
          </el-form-item>
          <el-form-item class="teshu zuo" label="屈服强度">
            <el-input v-model="ruleForm.qufu"></el-input>
          </el-form-item>
          <el-form-item class="teshu zuo" label="伸长率">
            <el-input v-model="ruleForm.shenchang"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="left">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="small"
        >
          <el-form-item class="teshu zuo" label="牌号" prop="paihao">
            <el-input v-model="ruleForm.paihao"></el-input>
          </el-form-item>
          <el-form-item class="teshu zuo" label="长度" prop="chang">
            <el-input v-model="ruleForm.chang"></el-input>
          </el-form-item>
          <el-form-item class="teshu zuo" label="厚度公差">
            <el-input v-model="ruleForm.gongcha"></el-input>
          </el-form-item>
          <el-form-item class="teshu zuo" label="拉伸长度">
            <el-input v-model="ruleForm.lashen"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 第三部分 -->
    <div class="details" v-if="yincang2">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        size="small"
      >
        <el-form-item class="teshu zuo" label="需求量" prop="xuqiu">
          <el-input v-model="ruleForm.xuqiu"></el-input>吨
        </el-form-item>
        <el-form-item class="teshu zuo" label="交货地点" prop="didian">
          <el-input v-model="ruleForm.didian"></el-input>
        </el-form-item>
        <el-form-item class="teshu zuo" label="交货时间" prop="shijian">
          <el-input v-model="ruleForm.shijian"></el-input>
        </el-form-item>
        <el-form-item class="teshu zuo" label="质量等级">
          <el-input v-model="ruleForm.zhilang"></el-input>
        </el-form-item>
        <el-form-item class="teshu zuo" label="包装方式">
          <el-input v-model="ruleForm.fangshi"></el-input>
        </el-form-item>
        <el-form-item class="teshu zuo" label="技术标准">
          <el-input v-model="ruleForm.biaozhun"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 结算 -->
    <div class="settlement">
      <el-row>
        <el-button @click="open2">默认按钮</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      big: [
        {
          bigtit: "选项1",
          center: [
            {
              centertit: "选项一",
              small: [
                { smalltit: "选项壹" },
                { smalltit: "选项贰" },
                { smalltit: "选项叁" }
              ]
            }
          ]
        },
        {
          bigtit: "选项2",
          center: [
            {
              centertit: "选项二",
              small: [
                {
                  smalltit: "选项贰"
                },
                {
                  smalltit: "选项贰"
                }
              ]
            }
          ]
        }
      ],

      value1: "",
      value2: "",
      value3: "",
      center0: [],
      small0: [],
      yincang: false,
      yincang2: false,

      activeName: "first",
      ruleForm: {
        app: "",
        materiel: "",
        name: "",
        date1: "",
        // 第二部分
        chandi: "",
        houdu: "",
        kuandu: "",
        qufu: "",
        shenchang: "",
        paihao: "",
        chang: "",
        gongcha: "",
        lashen: "",
        // 第三部分
        xuqiu: "",
        didian: "",
        shijian: "",
        zhiliang: "",
        fangshi: "",
        biaozhun: ""
      },
      rules: {
        app: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        materiel: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        // 第二部分
        chandi: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        houdu: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        kuandu: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        paihao: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        chang: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        // 第三部分
        xuqiu: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        didian: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        shijian: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    one() {
      this.value2 = "";
      this.value3 = "";
      var self = this;
      this.big.forEach(function(item, index) {
        if (item.bigtit == self.value1) {
          self.center0 = item.center;
          console.log(self.center0);
          self.yincang2 = true;
        }
      });
    },
    two() {
      this.value3 = "";
      var self = this;
      this.center0.forEach(function(item, index) {
        if (item.centertit == self.value2) {
          self.small0 = item.small;
          console.log(item.smalltit);
          self.yincang = true;
        }
      });
    },
    open2() {
      let _this = this;
      _this.$router.push({ path: "/form" });
    }
  }
};
</script>

<style lang="stylus" scoped>
// 面包屑
.bread {
  height: 40px;
  margin: 8px 20px 20px;
  border-bottom: 3px solid #ECECEC;
}

// 三级联动
.form {
  padding-top: 30px;
  margin: 8px 20px 20px;
  background: #F2F2F2;
}

.el-form-item--small.el-form-item {
  margin-bottom: 30px;
}

.teshu .el-input {
  width: 300px;
}

.el-select {
  margin-right: 40px;
}

.el-col-11 {
  width: 300px;
}

// 第三部分
.details {
  background: #F2F2F2;
  padding: 30px 0 10px;
  margin: 10px 20px 0px;
}

// 第二部分
.place {
  height: 300px;
  background: #F2F2F2;
  padding: 30px 0 10px;
  margin: 10px 20px 0px;
}

.left {
  float: left;
  height: 300px;
}

// 结算
.settlement {
  height: 300px;
  background: #F2F2F2;
  padding: 30px 0 10px;
  margin: 10px 20px 0px;
}

.el-row {
  margin: 0px 0px 0 30px;
}
</style>
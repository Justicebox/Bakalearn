<template>
  <div class="container">
    <!-- <payment ref="pay"></payment> -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="demo-ruleForm"
      label-position="left"
      size="mini"
    >
      <div class="con1">
        <el-form-item label="应用类" prop="app_class">
          <el-input v-model="ruleForm.app_class"></el-input>
        </el-form-item>
        <el-form-item class="wuliao" label="物料类" style="margin-bottom:0">
          <el-col :span="5">
            <el-form-item prop="material_class">
              <el-select v-model="ruleForm.material_class" placeholder="原材料" disabled>
                <el-option label="123" value="shanghai"></el-option>
                <el-option label="456" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item prop="material_big">
              <el-select v-model="ruleForm.material_big" placeholder="请选择大类" @change="gettwo">
                <el-option
                  :value="item.tit"
                  v-for="(item,index) in products"
                  :key="index"
                  :label="item.tit"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item prop="material_child">
              <el-select v-model="ruleForm.material_child" placeholder="请选择子类" @change="getthr">
                <el-option
                  :value="item.bigname"
                  v-for="(item,index) in pro_two"
                  :key="index"
                  :label="item.bigname"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item prop="material_sml">
              <el-select v-model="ruleForm.material_sml" placeholder="请选择小类">
                <el-option
                  :value="item.smlname"
                  v-for="(item,index) in pro_thr"
                  :key="index"
                  :label="item.smlname"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="物料名称" prop="raw_name">
          <el-input v-model="ruleForm.raw_name"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" prop="date1" required>
          <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </div>
      <div class="con1" v-show="ruleForm.material_child=='张三丰'" style="margin-top:20px">
        <el-form-item label="姓名" prop="a1">
          <el-input v-model="ruleForm.a1"></el-input>
        </el-form-item>
      </div>
      <div class="con1" style="margin-top:20px">
        <el-form-item label="结算方式" prop="payment">
          <el-radio v-model="radio" label="1">现金电汇</el-radio>
          <br />
          <el-radio v-model="radio" label="2">承兑汇票</el-radio>
          <br />
          <el-radio v-model="radio" label="3">预付定金</el-radio>
          <el-form-item prop="penny" style="display:inline-block;margin-bottom:0">
            <el-input style="width:150px;margin-right:20px" placeholder v-model="percentage">
              <template slot="append">%</template>
            </el-input>
            <span>剩余贷款</span>
            <el-input :value="rest" disabled style="width:150px;margin:0 20px"></el-input>
            <template>
              <el-button type="text" @click="pay">支付</el-button>
            </template>
          </el-form-item>

          <br />
          <el-radio v-model="radio" label="4">账期</el-radio>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import payment from '@/components/payment.vue'
export default {
  data() {
    return {
      ruleForm: {
        app_class: "",
        material_class: "",
        material_big: "",
        material_child: "",
        material_sml: "",
        raw_name: "",
        date1: "",
        selectid: "",
        payment: "",
        a1: "",
        penny: ""
      },
      // rest: "1520",
      show1:false,
      percentage: "",
      radio: "1",
      pro_two: [],
      pro_thr: [],
      products: [
        {
          tit: "钢材",
          body: [
            {
              bigname: "钢板",
              bigbd: [
                { smlname: "冷轧钢板" },
                { smlname: "热轧钢板" },
                { smlname: "啥也不是" }
              ]
            },
            {
              bigname: "钢筋",
              bigbd: [
                { smlname: "粗制钢筋" },
                { smlname: "滥做钢筋" },
                { smlname: "精致钢筋" }
              ]
            },
            {
              bigname: "钢棍",
              bigbd: [
                {
                  smlname: "大钢棍",
                  smlanme: "小钢棍",
                  smlname: "老钢棍"
                }
              ]
            }
          ]
        },
        {
          tit: "铁材",
          body: [
            {
              bigname: "赵四",
              bigbd: [
                { smlname: "ZSS" },
                { smlname: "ZED" },
                { smlname: "ZSDC" }
              ]
            },
            {
              bigname: "赵无极",
              bigbd: [
                { smlname: "/9." },
                { smlname: "/85.6" },
                { smlname: "/65" }
              ]
            },
            {
              bigname: "赵武",
              bigbd: [
                { smlname: "ZDS" },
                { smlname: " 从 从" },
                { smlname: "大风GV都是" }
              ]
            }
          ]
        },
        {
          tit: "铜材",
          body: [
            {
              bigname: "赵四",
              bigbd: [
                { smlname: "ZSS" },
                { smlname: "ZED" },
                { smlname: "ZSDC" }
              ]
            },
            {
              bigname: "赵无极",
              bigbd: [
                { smlname: "/9." },
                { smlname: "/85.6" },
                { smlname: "/65" }
              ]
            },
            {
              bigname: "赵武",
              bigbd: [
                { smlname: "ZDS" },
                { smlname: " 从 从" },
                { smlname: "大风GV都是" }
              ]
            }
          ]
        },
        {
          tit: "塑料",
          body: [
            {
              bigname: "赵四",
              bigbd: [
                { smlname: "ZSS" },
                { smlname: "ZED" },
                { smlname: "ZSDC" }
              ]
            },
            {
              bigname: "赵无极",
              bigbd: [
                { smlname: "/9." },
                { smlname: "/85.6" },
                { smlname: "/65" }
              ]
            },
            {
              bigname: "赵武",
              bigbd: [
                { smlname: "ZDS" },
                { smlname: " 从 从" },
                { smlname: "大风GV都是" }
              ]
            }
          ]
        }
      ],
      rules: {
        app_class: [
          { required: true, message: "请输入应用类", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        material_big: [
          { required: true, message: "请选择大类", trigger: "blur" }
        ],
        material_child: [
          { required: true, message: "请选择子类", trigger: "change" }
        ],
        material_sml: [
          { required: true, message: "请选择小类", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        raw_name: [
          { required: true, message: "请输入物料名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        payment: [
          { required: false, message: "请选择结算方式", trigger: "change" }
        ],
        // penny: [{ type: "number", message: "输入正确的格式", trigger: "blur" }],
        a1: [{ required: false, message: "请输入姓名", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("创建成功");
        } else {
          console.log("创建失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    gettwo() {
      this.ruleForm.material_child = "";
      this.ruleForm.material_sml = "";
      var self = this;
      this.products.forEach(function(item, index) {
        if (item.tit == self.ruleForm.material_big) {
          self.pro_two = item.body;
          console.log(item.body);
        }
      });
    },
    getthr() {
      this.ruleForm.material_sml = "";
      var self = this;
      this.pro_two.forEach(function(item, index) {
        if (item.bigname == self.ruleForm.material_child) {
          self.pro_thr = item.bigbd;
          console.log(item.bigbd);
        }
      });
    },
    pay() {
      alert("支付成功")
    }
  },
  created(){

  },
  // components:{
  //   payment
  // },
  computed: {
    rest: function() {
      return (1 - Number(this.percentage) / 100) * 10000;
    }
  }
};
</script>
<style scoped>
.container {
  padding: 20px 0;
}
.con1 {
  padding: 20px;
  background: #f5f6fa;
  text-align: left;
}
.el-input,
.el-date-picker {
  width: 300px;
}
.el-select {
  margin-right: 30px;
}
.wuliao {
  position: relative;
  padding-left: 10px;
}
.wuliao::before {
  position: absolute;
  left: 0;
  top: 8px;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
<template>
  <div class="base-main">
    <!-- vue挂载的元素上设置v-cloak属性，并在css里设置[v-cloak] {display: none;} 来防止页面加载时闪烁出现vue标签或者指令的问题-->
    <div id="app" v-cloak>
      <ul class="select-options">
        <li>
          <!-- 选取品牌时，将产品类型，产品名称，内存，颜色，IMEI等置空，为null -->
          <!-- 下面分别选择产品类型，名称，内存，颜色时同理，需要将相应的值置空 -->
          <label>选择品牌</label>
          <select v-model="brand" @change="type=null,name=null,ram=null, color=null, imei=null">
            <option disabled="disabled" :value="null">请选择</option>
            <option v-for="(item, index) in product" :value="index">{{item.brand}}</option>
          </select>
        </li>
        <li>
          <label>产品类型</label>
          <select v-model="type" @change="name=null,ram=null, color=null, imei=null">
            <option disabled="disabled" :value="null">请选择</option>
            <option v-for="(item, index) in typeArray" :value="index">{{item.type}}</option>
          </select>
        </li>
        <li>
          <label>产品名称</label>
          <select v-model="name" @change="ram=null, color=null, imei=null">
            <option disabled="disabled" :value="null">请选择</option>
            <option v-for="(item, index) in nameArray" :value="index">{{item.name}}</option>
          </select>
        </li>
        <li>
          <label>
            <span>
              <i>内</i>
              <i>存</i>
            </span>
          </label>
          <select v-model="ram" @change="color=null, imei=null">
            <option disabled="disabled" :value="null">请选择</option>
            <option v-for="(item, index) in ramArray" :value="index">{{item.ram}}</option>
          </select>
        </li>
        <li>
          <label>
            <span>
              <i>颜</i>
              <i>色</i>
            </span>
          </label>
          <select v-model="color" @change="imei=null">
            <option disabled="disabled" :value="null">请选择</option>
            <option v-for="(item, index) in colorArray" :value="index">{{item}}</option>
          </select>
        </li>
        <li v-show="imeiShow">
          <label @click="showImeiTip">IMEI码</label>
          <input type="text" v-model="imei" />
          <img src="./img/3c_camera.png" @click="useCamera" alt />
        </li>
      </ul>
      <div class="btn" @click="submit()">提交信息</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
            imei: '',
            imeiMaskShow: false,
            cameraShow: false,
            brand: null,
            type: null,
            name: null,
            ram: null,
            color: null,
            error: null,
            submitFlag: true,
            product: product,
      product: [
        {
          brand: "Apple",
          type: [
            {
              type: "iPhone",
              name: [
                {
                  name: "iPhone XS",
                  ram: [
                    {
                      ram: "64G",
                      color: ["金色", "白色", "绿色"]
                    },
                    {
                      ram: "128G",
                      color: ["金色", "白色", "绿色"]
                    }
                  ]
                },
                {
                  name: "iPhone XS MAX",
                  ram: [
                    {
                      ram: "64G",
                      color: ["金色", "白色", "绿色"]
                    },
                    {
                      ram: "128G",
                      color: ["金色", "白色", "绿色"]
                    }
                  ]
                }
              ]
            },
            {
              type: "iPad",
              name: [
                {
                  name: "IPad Air 无线局域网机型",
                  ram: [
                    {
                      ram: "64G",
                      color: ["金色", "白色", "绿色"]
                    },
                    {
                      ram: "128G",
                      color: ["金色", "白色", "绿色"]
                    }
                  ]
                },
                {
                  name: "Ipad Air 无线局域网 + 蜂窝网络机型",
                  ram: [
                    {
                      ram: "64G",
                      color: ["金色", "白色", "绿色"]
                    },
                    {
                      ram: "128G",
                      color: ["金色", "白色", "绿色"]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },
        computed: {
        	//获得品类信息
            typeArray: function () {
                return this.brand !== null ? this.product[this.brand].type : null
            },
            //获得所选取产品名称信息
            nameArray: function () {
                return (this.type !== null && this.typeArray.length) ? this.typeArray[this.type].name : null
            },
            //获得所所选产品内存信息
            ramArray: function () {
                return (this.name !== null && this.nameArray.length) ? this.nameArray[this.name].ram : null
            },
            //获得所选产品颜色信息
            colorArray: function () {
                return (this.ram !== null && this.ramArray.length) ? this.ramArray[this.ram].color : null
            },
            //获得所选产品IMEI信息
            //当所选产品类型是iPhone时，显示IMEI选项
            imeiShow: function () {
                return this.brand === 0 && this.type === 0 ? true : false
            },
            //提交前的完整性验证
            check: function () {
                this.error = null;
                switch (true) {
                    case this.brand === null:
                        this.error = '品牌'
                        break;
                    case this.type === null:
                        this.error = '产品类型'
                        break;
                    case this.name === null:
                        this.error = '产品名称'
                        break;
                    case this.ram === null:
                        this.error = '内存'
                        break;
                    case this.color === null:
                        this.error = '颜色'
                        break;
                    case this.imeiShow && !this.imei:
                        this.error = 'IMEI'
                        break;
                }
                return this.error
            }
        },
        methods: {
            showImeiTip: function () {
                this.imeiMaskShow = true
            },
            closeImeiTip: function () {
                this.imeiMaskShow = false
            },
            cancleCamera: function () {
                this.cameraShow = false;
            },
            useCamera: function () {
                this.cameraShow = true
            },
            //合并对象
            mergeObj: function (target, source) {
                for (var obj in source) {
                    target[obj] = source[obj];
                }
                return target;
            },
            //提交信息
            submit: function (cb) {
                if (this.check) {
                    alert('请填写' + this.error + '信息')
                    return false;
                }
                var data = {
                    "brand": this.product[this.brand].brand,
                    "type": this.typeArray[this.type].type,
                    "name": this.nameArray[this.name].name,
                    "memory": this.ramArray[this.ram].ram,
                    "color": this.colorArray[this.color],
                }
				
				//如果有IMEI信息，则提交时应该将该信息一并提交
                data = this.imei ? this.mergeObj(data, {'IMEI': this.imei}) : data;
                var that = this
                //防重复提交
                if(that.submitFlag) {
                    that.submitFlag = false
                    $.ajax({
                        url: path + '/abc/check',
                        type: 'post',
                        //后端要求传这样的数据格式
                        data: {'info': JSON.stringify(data)},
                        success: function (res) {
                        	//提交成功的回调函数
                            cb && cb()
                            that.submitFlag = true
                        },
                        error: function (error) {
                            that.submitFlag = true
                            alert('请求失败')
                        }
                    })
                    that.submitFlag = false
                }
            }
        }
    })

};
</script>
<style lang="scss" scoped>
</style>
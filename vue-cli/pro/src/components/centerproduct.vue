<template>
    <div class="product">
        <h2>您的产品</h2>
        <form class="fromes">
            <el-row class="form-group">
                <el-col :span="1">你的产品</el-col>
                <el-col :span="3" >
                    <select>
                        <option v-for="option in courses" v-bind:value="option.value" >{{option.value}}</option>
                    </select>            
                </el-col>

                <el-col :span="1">开始日期</el-col>
                <el-col :span="5" >
                    <el-date-picker  type="date" placeholder="开始日期" ></el-date-picker>     
                </el-col>
                
                <el-col :span="1">结束日期</el-col>
                <el-col :span="5" >
                    <el-date-picker  type="date" placeholder="结束日期" ></el-date-picker>     
                </el-col>

                <el-col :span="1">关键词</el-col>
                <el-col :span="4" >
                        <el-input></el-input>
                    </el-col>
                
            </el-row>
        </form>
        <div>
                <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                    }
                ],
                courses: [
                    {value: '广告发布' },
                    {value: '上海' },
                    {value: '深圳' }
                ],
                radio: '1'
            }
        },  
        methods: {
            open1() {
                this.$refs.pay.$emit('pay'); 
            }
        },
        created() {
            
        },
        components:{
            
        }
    }
</script>
<style>
    body{
        background-color: #f0f2f5;
    }
    .product{ 
        width: 1200px;
        padding: 25px;
        margin: 0 auto;
        text-align: left;
    }
    .product h2{
        font-size: 20px;
        line-height: 32px;
    }
    .product thead{
        line-height: 14px;  
    }
</style>
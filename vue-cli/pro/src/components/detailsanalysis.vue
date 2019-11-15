<template>
    <div class="count">
        <payment ref="pay"></payment>
        <div class="counttop">
                <h2>{{title}}</h2>
                <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备</p> 
                <form class="fromes" v-for="value in formData">
                    <el-row class="form-group">
                        <el-col :span="3"><div class="grid-content bg-purple">{{value.title}}</div></el-col>
                        <el-col :span="9">
                            <div v-if="value.style == 'style1'">
                                    <el-radio v-model="radio" label="1">红色版</el-radio>
                                    <el-radio v-model="radio" label="2">绿色版</el-radio>
                                    <el-radio v-model="radio" label="3">紫色版</el-radio>
                            </div>
                            <select v-if="value.style == 'style2'" class="col-sm-6 left input-sm selects" >
                                <option v-for="option in courses" v-bind:value="option.value" >{{option.value}}</option>
                            </select>  
                            <span v-if="value.style == 'style3'" >{{value.text}}</span>       
                                            
                        </el-col>
                    </el-row>
                </form>
                <el-row class="buy">
                        <el-button style="margin-left:105px;" @click="open1">立即购买</el-button>
                </el-row>
                
        </div>
    </div>
</template>    
<script>
    import payment from '@/components/payment.vue'
    export default {
        data() {
            return {
                title:'流量分析',
                formData:[
                    {
                        title:'产品类型：',
                        module:'name',
                        type:'button',
                        style:'style1',
                        
                    },{
                        title:'适用地区：',
                        module:'course',
                        // type:'text',
                        style:'style2'
                    },
                    {
                        title:'有效时间：',
                        module:'time',
                        style:'style3',
                        text:'半年'
                    },
                    {
                        title:'总价：',
                        module:'mon',
                        style:'style3',
                        text:'500 元'
                    }

                ],
                courses: [
                    {value: '北京' },
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
            payment
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .count{
        text-align: left;
    }
    .counttop{
        padding: 30px;
    }
    .counttop h2{
        font-size: 22px;
        line-height: 22px;
    }
    .counttop p{
        line-height: 16px;
        margin-top: 42px;
        margin-bottom: 20px;
    }
    .counttop input{
        margin-right: 10px;
        background-color: #fff;
        border-radius: 3px;
        border: 1px solid #eee;
        padding: 5px 8px;
    }
    .counttop .el-button{
        color: #000 !important;
    }
    .el-button.el-button--success{
        background-color: #4fc08d !important;
        color: #fff !important;
    }
    .buy .el-button{
        background-color: #4fc08d !important;
        color: #fff !important;
    }
    .form-group{
        line-height: 50px;
    }
    .el-radio__input.is-checked .el-radio__inner {
        border-color: #4fc08d !important;
        background-color: #4fc08d !important;
    }
    .el-radio__input.is-checked+.el-radio__label {
        color:  #4fc08d !important;
    }
</style>
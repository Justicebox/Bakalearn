<template>
    <div style="position:relative" >
        <div v-show='show3'>
            <el-collapse-transition>
                <div class="pay" >
                    <div class="transition-box">
                        <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            prop="count"
                            label="数量"
                            width="118">
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="类型"
                            width="118">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="有效时间"
                            width="118">
                        </el-table-column>
                        <el-table-column
                            prop="pro"
                            label="产品版本"
                            width="290">
                        </el-table-column>
                        <el-table-column
                            prop="mon"
                            label="总价"
                            width="60">
                        </el-table-column>
                        </el-table>
                    </div>
                    <div class="bank">
                        <h2>请选择银行</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <el-row style="position:absolute;left:20px;bottom:20px;line-height: 48px;">
                        <el-button  @click="open">确认购买</el-button>
                    </el-row>
                </div>
                
            </el-collapse-transition>
            </div>
        </div>
    </div>
    
</template>
<script>
    export default {
       
        data(){
            return {
                show3:false,
                tableData: [{
                    count: '5',
                    type: '中极版',
                    time: '三年',
                    pro: '客户版代理商版专家版',
                    mon: '678'
                }]
            }
        },
        methods:{     
            display(){
                this.show3 = true;
            },
            open(){
               
                const h = this.$createElement;
                this.$msgbox({
                title: '消息',
                message: h('p', null, [
                    h('span', null, '请检查你的支付状态 '),
                    h('i', { style: 'color: teal' })
                ]),
                showCancelButton: true,
                confirmButtonText: '支付成功',
                cancelButtonText: '支付失败',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        this.$router.push({path: '/Home/qcenter/centerproduct'})
                        done();
                    } else {
                    done();
                    }
                }
                }).then(action => {
                this.$message({
                    type: 'info',
                    message: 'action: ' + action
                });
                });
                this.show3 = false;
                
            }
    
        },
        mounted: function () {
            this.$nextTick(function () {
                this.$on('pay', function () {
                    this.display();
                })
            })
        }
    }
</script>

<style>
    .pay{
        margin-top: 20px; 
        height: 330px; 
        width:750px;
        position: absolute;
        top: 30px;
        left: 35px;
        border: 2px solid #000;
        background-color: #fff;
        z-index: 1000;
    }
    .transition-box{
        padding: 20px;
    }
    .transition-box thead{
        line-height: 14px;
       
    }
    .transition-box thead th{
        background-color:  #4fc08d;
        color: #fff;
        text-align: center;
    }
    .transition-box tbody td{
        border: 1px solid #ebeef5;
        text-align: center;
    }
    .bank{
        padding: 0 20px;
    }
    .bank h2{
        line-height: 20px;
    }
    .bank li{
        float: left;
        width: 119px;
        height: 35px;
        margin: 12px 12px 12px 0;
        /* background-color: red; */
        background-image: url('../assets/banks/banks.png');
        background-size: cover;
        border: 1px solid #eee;
    }
    .bank li:nth-child(1){
        background-position: -117px 3px;
    }
    .bank li:nth-child(2){
        background-position: -700px 3px;
    }
    .bank li:nth-child(3){
        background-position: -1633px 3px;
    }
    .bank li:nth-child(4){
        background-position: -1750px 3px;
    }
    .bank li:nth-child(5){
        background-position: -1867px 3px;
    }
    .pay .el-button{
        background-color:  #4fc08d !important;
        color: #fff !important;
    }
</style>
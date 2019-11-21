<template>
  <div class="box">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="ying" label="应用类"></el-table-column>
        <el-table-column prop="wu" label="物料类"></el-table-column>
        <el-table-column prop="wuliao" label="物料名称"></el-table-column>
        <el-table-column prop="pin" label="品牌"></el-table-column>
        <el-table-column prop="pai" label="牌号"></el-table-column>
        <el-table-column prop="gui" label="规格"></el-table-column>
        <el-table-column prop="chan" label="产地"></el-table-column>
        <el-table-column prop="zhuang" label="状态"></el-table-column>
        <el-table-column prop="cao" label="操作" width="180"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          ying: "123",
          wu: "冷轧钢板",
          wuliao: "abc",
          pin:"-",
          pai:"123456789",
          gui:"0.6*100",
          chan:"山东",
          zhuang:"已下架",
          cao:"上架",
        },
        {
          ying: "123",
          wu: "铝薄板",
          wuliao: "asd",
          pin:"-",
          pai:"123456789",
          gui:"0.6*100",
          chan:"山东",
          zhuang:"已下架",
          cao:"上架",
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.bread {
  height: 40px;
  margin: 8px 20px 20px;
  border-bottom: 3px solid #ECECEC;
}
</style>
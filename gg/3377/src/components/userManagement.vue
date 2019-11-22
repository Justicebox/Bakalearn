<template>
  <div>
    <div class="add">
      <button @click="handleAdd">添加</button>
    </div>
    <el-table :data="list" border highlight-current-row style="width: 100%;line-height:0px">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="name" label="用户名" min-width="100" sortable></el-table-column>
      <el-table-column prop="content" label="职位" min-width="120" sortable></el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteList(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="title"
      :visible.sync="editFormVisible"
      :close-on-click-modal="false"
      class="edit-form"
      :before-close="handleClose"
    >
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="职位" prop="content">
          <el-input v-model="editForm.content" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="handleCancel('editForm')">取消</el-button>
        <el-button v-show="btnAlert1" type="primary" @click.native="updateList('editForm')">更新</el-button>
        <el-button v-show="btnAlert2" type="primary" @click.native="addList('editForm')">添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Mock from "@/mock/mock";

export default {
  data() {
    return {
      list: [],
      obj: {
        //将添加的数据存到obj对象中
        id: 0,
        name: "",
        content: ""
      },
      editForm: {
        name: "",
        content: ""
      },
      editFormVisible: false,
      //验证
      editFormRules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        content: [{ required: true, message: "请输入职位", trigger: "blur" }]
      },
      title: "编辑",
      btnAlert1: true,
      btnAlert2: false,
      Id:0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    //点击关闭dialog
    handleClose(done) {
      /*done();
        location.reload();*/
      this.editFormVisible = false;
    },
    //点击取消
    handleCancel(formName) {
      this.editFormVisible = false;
    },
    //点击编辑
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.title = "编辑";
      this.btnAlert1 = true;
      this.btnAlert2 = false;
      this.editForm = Object.assign({}, row); //这句是关键！！！
      if (typeof this.$refs.editForm != "undefined")
        this.$refs.editForm.resetFields();

      this._index = index;
    },
    // 点击添加
    handleAdd(index, row) {
      this.editFormVisible = true;
      this.title = "添加";
      this.btnAlert1 = false;
      this.btnAlert2 = true;
      if (typeof this.$refs.editForm != "undefined")
        this.$refs.editForm.resetFields();
    },
    // 查询列表数据
    getData() {
      this.$axios.get("/list").then(res => {
        this.list = res.data.data;   
        this.Id = res.data.data.length
        
      });
    },

    // 删除列表数据
    deleteList(index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            console.log(index)
          this.$axios
            .post("/list", {
              params: {
                id: index
              }
            })
            .then(res => {
              this.list = res.data.data;
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    // 增加列表数据
    addList() {
      // console.log("****"+this.obj);
      this.editForm.id = this.Id
      this.$axios
        .post("/listAdd", {
          params: {
            obj: this.editForm
          }
        })
        .then(res => {
          // console.log("请求成功"+res.data.data);
          this.list = res.data.data;
        });
        // location.reload();
        this.editFormVisible = false;
    },

    // 修改列表数据
    updateList() {
      var that = this;
      this.$axios
        .post("/listUpdate", {
          params: {
            obj: this.editForm
          }
        })
        .then(function(res) {
          // console.log("请求的数据"+res.data.data);
          that.list = res.data.data;
        });
      this.editFormVisible = false;
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.dialog-footer .add,
.dialog-footer .update {
  display: none;
}
</style>
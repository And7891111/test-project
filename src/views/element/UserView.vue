<template>
  <el-container style="height: 100vh;">
    <!-- 1. 头部 -->
    <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)">
      <div style="height: 60px; line-height: 60px;">Quiz后台管理</div>
    </el-header>

    <el-container>
      <!-- 2. 左侧菜单栏 (加入点击跳转路由) -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>管理选项</template>
            <el-menu-item-group>
              <!-- 点击直接触发路由跳转 -->
              <el-menu-item index="1-1" @click="$router.push('/user')">用户管理</el-menu-item>
              <el-menu-item index="1-2" @click="$router.push('/question')">题目管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 3. 右侧主体内容 -->
      <el-main>
        <!-- 顶部搜索表单 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="用户名">
            <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="success" @click="dialogFormVisible = true">添加用户</el-button>
          </el-form-item>
        </el-form>

        <!-- 表格区域 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <br />
        
        <!-- 分页 -->
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>

        <!-- 弹出的添加用户的对话框 -->
        <el-dialog title="添加新用户" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" autocomplete="off" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" :label-width="formLabelWidth">
              <el-input v-model="form.confirmPassword" autocomplete="off" show-password></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        password: "",
        confirmPassword: ""
      },
      formLabelWidth: "80px",
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        { date: "2016-05-02", name: "王小虎", address: "上海市普陀区金沙江路 1518 弄" },
        { date: "2016-05-04", name: "王小虎", address: "上海市普陀区金沙江路 1517 弄" },
        { date: "2016-05-01", name: "王小虎", address: "上海市普陀区金沙江路 1519 弄" },
        { date: "2016-05-03", name: "王小虎", address: "上海市普陀区金沙江路 1516 弄" },
      ],
    };
  },
  methods: {
    onSubmit() { console.log('submit!'); },
    handleEdit(index, row) { console.log(index, row); },
    handleDelete(index, row) { console.log(index, row); }
  }
};
</script>

<style scoped>
.el-header {
  color: #333;
  line-height: 60px;
}
</style>
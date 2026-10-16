<template>
  <el-container style="height: 100vh;">
    <!-- 1. 头部 -->
    <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)">
      <div style="height: 60px; line-height: 60px;">Quiz后台管理</div>
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>管理选项</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!-- 点击跳转到用户管理 -->
                <router-link to="/user">用户管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <!-- 点击跳转到题目管理 -->
                <router-link to="/question">题目管理</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 3. 右侧主体内容 -->
      <el-main>
        <!-- 顶部搜索和操作栏 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="题目">
            <el-input v-model="formInline.user" placeholder="请输入题目关键词"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="success" @click="dialogFormVisible = true">添加题目</el-button>
          </el-form-item>
        </el-form>

        <!-- 表格区域 -->
        <el-table :data="tableData" style="width: 100%">
          <!-- 序号列 -->
          <el-table-column label="序号" width="80">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>

          <!-- 题目列 -->
          <el-table-column label="题目" width="250">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.question }}</span>
            </template>
          </el-table-column>

          <!-- 选项列 -->
          <el-table-column label="选项" width="260">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.options }}</span>
            </template>
          </el-table-column>

          <!-- 答案列 -->
          <el-table-column label="答案" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.answer }}</span>
            </template>
          </el-table-column>

          <!-- 操作列 -->
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

        <!-- 4. 弹窗区域 (添加题目) -->
        <el-dialog title="添加新题目" :visible.sync="dialogFormVisible" width="500px">
          <el-form :model="form">
            <el-form-item label="题目" :label-width="formLabelWidth">
              <el-input v-model="form.question" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选项a" :label-width="formLabelWidth">
              <el-input v-model="form.optiona" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选项b" :label-width="formLabelWidth">
              <el-input v-model="form.optionb" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选项c" :label-width="formLabelWidth">
              <el-input v-model="form.optionc" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选项d" :label-width="formLabelWidth">
              <el-input v-model="form.optiond" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="答案" :label-width="formLabelWidth">
              <el-input v-model="form.answer" autocomplete="off"></el-input>
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
      // 控制弹窗显示
      dialogFormVisible: false,
      
      // 弹窗表单数据绑定
      form: {
        question: "",
        optiona: "",
        optionb: "",
        optionc: "",
        optiond: "",
        answer: ""
      },
      formLabelWidth: "80px", // 标签宽度
      
      // 顶部查询表单
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          id: "1",
          question: "a是1，b是2，c是3，d是什么？",
          options: "4，5，6，d是1",
          answer: "d是1"
        },
        {
          id: "2",
          question: "a是1，b是2，c是3，d是什么？",
          options: "4，5，6，d是1",
          answer: "d是1"
        },
        {
          id: "3",
          question: "a是1，b是2，c是3，d是什么？",
          options: "4，5，6，d是1",
          answer: "d是1"
        },
        {
          id: "4",
          question: "a是1，b是2，c是3，d是什么？",
          options: "4，5，6，d是1",
          answer: "d是1"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped>
/* 样式保持干净，主要依靠 Element UI 默认样式 */
.el-menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
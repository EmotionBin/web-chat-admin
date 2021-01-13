<template>
  <div class="theme-list-wrap">
    <el-table :data="list" v-bind="table">
      <el-table-column prop="title" align="center" width="160"/>
      <el-table-column label="预览" width="120">
        <div slot-scope="scope" class="theme-preview" :style="{ backgroundImage: `url(${scope.row.preview})` }"/>
      </el-table-column>
      <el-table-column prop="address" align="center">
        <template slot-scope="scope">
          <el-button v-if="theme.activeName === scope.row.name" type="success" icon="el-icon-check" round>已激活</el-button>
          <el-button v-else round @click="handleSelectTheme(scope.row.name)">使用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import logo from '@/assets/logo.png'

export default {
  name: 'themeListIndex',
  components: {
  },
  data () {
    return {
      table: {
        showHeader: false,
        border: true
      },
      list: [
        {
          title: '经典',
          name: 'default',
          preview: logo
        },
        {
          title: '经典1',
          name: 'default1',
          preview: logo
        },
        {
          title: '经典2',
          name: 'default2',
          preview: logo
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  created () {
  },
  mounted () {
    // this.init()
  },
  watch: {
  },
  methods: {
    ...mapMutations('theme', [
      'updateActiveTheme'
    ]),
    // 初始化 设置主题
    // init () {
    //   const activeName = this.theme.activeName || ''
    //   this.updateActiveTheme({ activeName })
    // },
    // 切换主题
    handleSelectTheme (name) {
      console.log('name: ', name)
      this.updateActiveTheme({ activeName: name })
    }
  }
}
</script>

<style lang="scss">
.theme-list-wrap{
  .theme-preview {
    height: 50px;
    width: 100px;
    border-radius: 4px;
    background-size: cover;
    border: 1px solid #DCDFE6;
  }
}
</style>

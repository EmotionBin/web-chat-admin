<template>
  <div class="menu-wrap">
    <el-menu text-color="#fff" active-text-color="#fff" unique-opened :default-active="activeMenu" @select="handleSelectItem">
      <template v-for="item in menuList">
        <el-submenu v-if="item.subMenu" :index="item.alias" :key="item.alias">
          <template slot="title">
            <i class="menu-icon" :style="{'background-image':`url(${item.icon})`}"></i>
            <span class="menu-title">{{item.title}}</span>
          </template>
          <template v-for="item1 in item.subMenu">
            <el-menu-item :index="item1.path" :key="item1.alias">{{item1.title}}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="item.alias" :key="item.alias">
          <i class="menu-icon" :style="{'background-image':`url(${item.icon})`}"></i>
          <span class="menu-title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menuIndex',
  data () {
    return {
      activeMenu: 'projectSituation',
      menuList: [
        {
          title: '监控中心',
          alias: 'monitoringCenter',
          icon: '',
          show: true,
          subMenu: [
            {
              title: '项目管理',
              alias: 'projectManagement',
              icon: '',
              path: '/monitoringCenter/projectManagement',
              show: true
            },
            {
              title: '项目运行情况',
              alias: 'projectSituation',
              icon: '',
              path: '/monitoringCenter/projectSituation',
              show: true
            }
          ]
        }
      ]
    }
  },
  components: {
  },
  computed: {
    getCurrentRoute () {
      return 1
    }
  },
  watch: {
  },
  created () {
    this.init()
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    // 初始化 设置参数
    init () {
      const { activeMenu, menuList } = this
      const currentActiveMenu = []
      for (let i = 0; i < menuList.length; i++) {
        const item = menuList[i]
        const index1 = item.subMenu.findIndex(item1 => item1.alias === activeMenu)
        if (index1 !== -1) {
          currentActiveMenu.push(item.title, item.subMenu[index1].title)
          break
        }
      }
      // this.$store.commit('updateActiveMenu', currentActiveMenu)
    },
    // 点击菜单选项
    handleSelectItem (key, keyPath) {
      console.log('key, keyPath: ', key, keyPath)
      this.$router.push(key)
      // if (this.getCurrentRoute === path) {
      //   return
      // }
      // this.$store.commit('updateActiveMenu', [parentTitle, title])
      // this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
.menu-wrap{
  width: $menuHoverWidth;
  height: 100%;
  .el-menu{
    border-right: 0;
    background: transparent;
    .el-submenu__title{
      i::before{
        color: #fff;
      }
    }
    .el-menu--inline{
      display: none;
    }
    .el-menu-item{
      // height: 40px;
      // line-height: 40px;
      padding-left: $menuWidth !important;
    }
    .el-submenu__title:hover,
    .el-menu-item:hover{
      background: #58697c;
    }
    .el-menu-item.is-active{
      border-right: 1px solid #fff;
      background: #6d819a;
    }
  }
  .menu-icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: 100%;
  }
  .menu-title{
    margin-left: 16px;
  }
  &:hover{
    .el-menu--inline{
      display: block;
    }
  }
}
</style>

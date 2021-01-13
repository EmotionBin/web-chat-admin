<template>
  <div class="head-wrap">
    <div class="head-left">
      <span class="left-title">web-chat-admin</span>
    </div>
    <div class="head-right">
      <head-theme/>
      <el-dropdown @command="clickItem">
        <span class="el-dropdown-link">
          {{user.username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <template v-for="item in commandList">
            <el-dropdown-item :key="item.name" :command="item.command" :icon="item.icon">{{item.name}}</el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import HeadTheme from './theme/index.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'headIndex',
  data () {
    return {
      commandList: [
        {
          name: '注销',
          command: 'logout',
          icon: 'el-icon-switch-button',
          path: {
            name: 'login'
          }
        }
      ]
    }
  },
  components: {
    HeadTheme
  },
  computed: {
    ...mapGetters(['user'])
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    ...mapMutations('user', [
      'updateUser'
    ]),
    // 下拉菜单点击事件
    clickItem (command) {
      const item = this.commandList.find(item => item.command === command)
      this.$router.push(item.path)
      if (item.command === 'logout') {
        // 进行注销操作
        localStorage.removeItem('uuid')
        // vuex 清空用户信息
        this.updateUser({
          username: '',
          userId: '',
          avatar: ''
        })
      }
    }
  }
}
</script>

<style lang="scss">
.head-wrap{
  @include flex-between;
  height: $navHeight;
  padding: 0 30px;
  // background: linear-gradient(90deg,#6081a7,#545e67,#576280);
  .head-left{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .left-title{
    display: inline-block;
    line-height: 1;
    font-size: 26px;
    // color: #e2ecf6;
  }
  .head-right{
    @include flex-center;
    .el-dropdown{
      // color: #fff;
      cursor: pointer;
    }
  }
  .right-username{
    height: 20px;
    color: #c0c7d2;
    @include text-overflow;
  }
}
</style>

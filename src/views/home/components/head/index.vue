<template>
  <div class="head-wrap">
    <div class="head-left">
      <div class="left-img"></div>
      <span class="left-title">智慧照明云平台</span>
    </div>
    <div class="head-right">
      <el-dropdown @command="handleCommand">
        <div class="right-img"></div>
        <div class="right-username">admin</div>
        <el-dropdown-menu slot="dropdown" class="app-header-dropdown">
          <el-dropdown-item command="systemSetting">
            <span class="drop-img systemSetting" :style="{'background-image': `url(${logo})`}"></span>
            注销
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="el-icon-caret-bottom drop-icon"></i>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: 'headIndex',
  data () {
    return {
      logo
    }
  },
  components: {
  },
  computed: {
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
    // 下拉菜单点击事件
    handleCommand (command) {
      console.log('command: ', command)
    }
  }
}
</script>

<style lang="scss">
.head-wrap{
  @include flex-between;
  height: $navHeight;
  background: linear-gradient(90deg,#6081a7,#545e67,#576280);
  .head-left{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .left-img{
    display: inline-block;
    width: 26px;
    height: 26px;
    margin: 0 5px;
    @include bg-icon;
    background-image: url('~@/assets/logo.png');
  }
  .left-title{
    display: inline-block;
    line-height: 1;
    font-size: 26px;
    color: #e2ecf6;
  }
  .head-right{
    position: relative;
    width: 145px;
    height: 100%;
    @include flex-center;
    border-left: 1px solid #656e89;
    cursor: pointer;
    &:hover{
      background: #545f6a;
    }
    // .el-dropdown{
    //   @include flex-center;
    //   flex-direction: column;
    //   width: 100%;
    //   height: 100%;
    // }
  }
  .right-img{
    display: inline-block;
    width: 30px;
    height: 40px;
    @include bg-icon;
    background-image: url('~@/assets/logo.png');
  }
  .right-username{
    height: 20px;
    color: #c0c7d2;
    @include text-overflow;
  }
  // .drop-icon{
  //   position: absolute;
  //   right: 20px;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   color: #c0c7d2;
  // }
}
</style>

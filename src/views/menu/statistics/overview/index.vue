<template>
  <div class="overview-wrap">
    <!-- 数据概览
    1.最近三十天访问人数
    2.总活跃度(用户每进行一次操作活跃度 + 1)
    3.昨日活跃度
    图表
    1.最近一周访问人数折线图
    2.最近一周活跃度柱状图 -->
    <div class="overview-head">
      <template v-for="item in headAccountData">
        <div class="head-area-wrap" :key="item.title">
          <div class="head-area-content">
            <div class="area-title">{{ item.title }}</div>
            <div :class="['area-value', item.name]">{{ item.value }}</div>
          </div>
        </div>
      </template>
    </div>
    <div class="overview-body">
      <div class="body-chart-wrap">
        <div class="chart-view" ref="chartPeopleNumber"></div>
      </div>
      <div class="body-chart-wrap">
        <div class="chart-view" ref="chartActivityLevel"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'statisticsOverview',
  data () {
    return {
      headAccountData: [
        {
          title: '最近三十天访问人数',
          name: 'lastThirty',
          tips: '',
          value: 30
        },
        {
          title: '昨日访问人数',
          name: 'yesterday',
          tips: '',
          value: 30
        },
        {
          title: '总活跃度',
          tips: '用户每进行一次操作活跃度加一',
          name: 'sumActivity',
          value: 30
        },
        {
          title: '昨日活跃度',
          tips: '用户每进行一次操作活跃度加一',
          name: 'yesterdayActivity',
          value: 30
        }
      ],
      chart: []
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
    this.init()
  },
  beforeDestroy () {
    // 销毁前取消监听
    window.removeEventListener('resize', this.chartRepaint)
  },
  methods: {
    // 初始化
    init () {
      // 请求数据...
      const data = {
        xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        value: [120, 132, 101, 134, 90, 230, 210]
      }
      const option = this.getChartOption({ domRef: 'chartPeopleNumber', data })
      this.setchart({ domRef: 'chartPeopleNumber', option })
      const data1 = {
        xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        value: [10, 52, 200, 334, 390, 330, 220]
      }
      const option1 = this.getChartOption({ domRef: 'chartActivityLevel', data: data1 })
      this.setchart({ domRef: 'chartActivityLevel', option: option1 })
      // 窗口大小改变的时候重绘图表
      window.addEventListener('resize', this.chartRepaint)
    },
    // 绘制图表
    setchart ({ domRef, option }) {
      const dom = this.$refs[domRef]
      const myChart = echarts.init(dom)
      myChart.setOption(option)
      // 只要绘制一个图表就做好记录
      this.chart.push({
        domRef,
        chartCase: myChart
      })
    },
    // 窗口大小改变重绘窗口
    chartRepaint () {
      this.chart.forEach(item => {
        item.chartCase.resize()
      })
    },
    // 图表配置
    getChartOption ({ domRef, data }) {
      const chartPeopleNumberOption = {
        title: {
          text: '最近一周访问人数',
          textStyle: {
            color: '#666',
            fontWeight: 'normal'
          },
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: data.xData
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '访问人数',
            type: 'line',
            smooth: true,
            areaStyle: {},
            data: data.value
          }
        ]
      }
      const chartActivityLevelOption = {
        title: {
          text: '最近一周活跃度',
          textStyle: {
            color: '#666',
            fontWeight: 'normal'
          },
          x: 'center'
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: data.xData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '活跃度',
            type: 'bar',
            barWidth: '60%',
            data: data.value
          }
        ]
      }
      const wrap = {
        chartPeopleNumberOption,
        chartActivityLevelOption
      }
      return wrap[`${domRef}Option`]
    }
  }
}
</script>

<style lang="scss">
.overview-wrap{
  height: 100%;
  overflow: hidden;
  .overview-head{
    height: 260px;
    display: flex;
    border-bottom: 1px solid #d1d1d1;
    .head-area-wrap{
      flex: 1;
      padding: 20px;
    }
    .head-area-content{
      height: 100%;
      @include flex-center;
      flex-direction: column;
      font-size: 30px;
      color: #999;
      border: 1px solid #e9e9e9;
      box-shadow: 0 0 4px #d1d1d1;
      .area-title{
        margin-bottom: 20px;
      }
      .area-value{
        &.lastThirty{
          color: rgb(56, 157, 247);
        }
        &.yesterday{
          color: rgb(60, 217, 158);
        }
        &.sumActivity{
          color: rgb(250, 199, 79);
        }
        &.yesterdayActivity{
          color: rgb(254, 142, 88);
        }
      }
    }
  }
  .overview-body{
    height: calc(100% - 260px);
    display: flex;
    .body-chart-wrap{
      width: 50%;
      padding: 20px;
    }
    .chart-view{
      height: 100%;
    }
  }
}
</style>

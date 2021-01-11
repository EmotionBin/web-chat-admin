<template>
  <div class="analysis-wrap">
    <!-- 1.登录方式 微信登录与普通登录 饼图
    2.用户使用时间段 饼图 0:00-8:00 8:00-12:00 12:00-18:00 18:00-0:00
    数据分析 -->
    <div class="analysis-chart-wrap">
      <div class="chart-view" ref="chartLoginWay"></div>
    </div>
    <div class="analysis-chart-wrap">
      <div class="chart-view" ref="chartTimeRange"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'statisticsAnalysis',
  data () {
    return {
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
  },
  methods: {
    // 初始化
    init () {
      // 请求数据...
      const data = [
        {
          value: 335,
          name: '微信登录'
        },
        {
          value: 264,
          name: '普通登录'
        }
      ].sort((a, b) => a.value - b.value)
      const option = this.getChartOption({ domRef: 'chartLoginWay', data })
      this.setchart({ domRef: 'chartLoginWay', option })
      const option1 = this.getChartOption({ domRef: 'chartTimeRange', data })
      this.setchart({ domRef: 'chartTimeRange', option: option1 })
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
      const chartLoginWayOption = {
        title: {
          text: '用户登录方式',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#666',
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '登录方式',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data,
            roseType: 'radius',
            labelLine: {
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: idx => Math.random() * 200
          }
        ]
      }
      const chartTimeRangeOption = {
        title: {
          text: '用户使用时间段',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#666',
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      const wrap = {
        chartLoginWayOption,
        chartTimeRangeOption
      }
      return wrap[`${domRef}Option`]
    }
  }
}
</script>

<style lang="scss">
.analysis-wrap{
  height: 100%;
  overflow: hidden;
  display: flex;
  .analysis-chart-wrap{
    width: 50%;
    padding: 20px;
  }
  .chart-view{
    height: 100%;
  }
}
</style>

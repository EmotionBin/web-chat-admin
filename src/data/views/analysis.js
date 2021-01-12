const f = day => {
  const end = new Date()
  const start = new Date()
  start.setTime(start.getTime() - 3600 * 1000 * 24 * day)
  return [start, end]
}

export const pickerOptions = {
  shortcuts: [
    {
      text: '最近一周',
      onClick (picker) {
        picker.$emit('pick', f(7))
      }
    },
    {
      text: '最近一个月',
      onClick (picker) {
        picker.$emit('pick', f(30))
      }
    },
    {
      text: '最近三个月',
      onClick (picker) {
        picker.$emit('pick', f(90))
      }
    }
  ],
  disabledDate: time => time.getTime() > Date.now()
}

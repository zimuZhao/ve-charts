const baseData = {
  dimension: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  measure: [{
    name: '蒸发量',
    data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
  }, {
    name: '降水量',
    data: [2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3]
  }]
}

export default {
  name: '折线图',
  type: 'line',
  chartData: [
    {
      title: '简单折线图',
      data: baseData,
      settings: {}
    },
    {
      title: '显示文本标签',
      data: baseData,
      settings: {
        labelStyle: {
          showLabel: true,
          labelPosition: 'top',
          labelFontSize: '12px',
          labelFontWeight: 'bold'
        }
      }
    }
  ]
}

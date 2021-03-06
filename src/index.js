import VeBarChart from './packages/bar'
import VeDonutChart from './packages/donut'
import VeGaugeChart from './packages/gauge'
import VeGeoChart from './packages/geo'
import VeLineChart from './packages/line'
import VePieChart from './packages/pie'
import VeRadarChart from './packages/radar'
import VeScatterChart from './packages/scatter'
import VeStripChart from './packages/strip'
import VeTreemapChart from './packages/treemap'

const components = [
  VeBarChart,
  VeDonutChart,
  VeGaugeChart,
  VeGeoChart,
  VeLineChart,
  VePieChart,
  VeRadarChart,
  VeScatterChart,
  VeStripChart,
  VeTreemapChart
]

function install(Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  VeBarChart,
  VeDonutChart,
  VeGaugeChart,
  VeGeoChart,
  VeLineChart,
  VePieChart,
  VeRadarChart,
  VeScatterChart,
  VeStripChart,
  VeTreemapChart,
  install
}

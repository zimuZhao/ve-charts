<template>
  <div>
    <base-echarts
      :options="options"
      :autoResize="true"
      :theme="theme"
      @chartclick="onClick"
    />
    <slot>
      <empty-data v-if="data == null" />
    </slot>
  </div>
</template>

<script>
  import Core from '../..//mixins/Core'
  import { options } from '../../base-options'
  import { radar } from './chartHandler'

  import BaseEcharts from '../../components/BaseEcharts'

  export default {
    name: 'VeRadarChart',
    mixins: [Core],
    data () {
      return {
        options
      }
    },
    created () {
      this.chartHandler = radar
    },
    methods: {
      onClick (e) {
        this.$emit('chartclick', e)
      }
    },
    components: {
      BaseEcharts
    }
  }
</script>

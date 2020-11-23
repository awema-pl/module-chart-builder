<template>
    <chart-builder :data="chartData" :options="chartOptions"></chart-builder>
</template>

<script>
import { line } from '../js/modules/chart-options'

export default {

    name: 'chart-lines',


    props: {

        yData: {
            type: [Array, Object],
            required: true
        },

        xData: {
            type: Array,
            reqired: true
        },

        tooltipCallbacks: Object
    },


    computed: {

        chartData() {
            return {
                datasets: this.chartDatasets,
                labels: this.xData
            }
        },

        chartDatasets() {
            return Array.isArray(this.yData) ?
                this.yData.map(this.formatDataset) :
                [ this.formatDataset(this.yData) ]
        },

        chartOptions() {
            if ( this.tooltipCallbacks ) {
                line.tooltips.callbacks = this.tooltipCallbacks
            }
            return line
        }
    },



    methods: {

        formatDataset({ data = [], color = 'gray', label = ''}) {
            return {
                data,
                borderColor: color,
                backgroundColor: color,
                fill: false,
                label: label
            }
        },
    }
}
</script>
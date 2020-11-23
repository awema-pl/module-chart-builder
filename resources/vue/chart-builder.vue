<template>
    <div class="chart">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
// import chartOptions from '../js/modules/chart-options.js'
// import chartDataConverter from '../js/modules/chart-data-converter.js'
import isEqual from 'lodash.isequal'
import Chart from 'chart.js'
import 'chartjs-plugin-labels'

export default {

    name: 'chart-builder',

    props: {

        data: {
            type: Object,
            required: true
        },

        show: {
            type: Boolean,
            default: true
        },

        options: Object,

        type: {
            type: String,
            default: 'line',
            // validator(type) {
            //     return Object.keys(chartOptions).includes(type)
            // }
        }
    },


    data() {
        return {
            chart: null,
            tooltip: false
        }
    },


    // computed: {

    //     chartData() {
    //         return chartDataConverter[this.type](this.data)
    //     },

    //     chartOptions() {
    //         const options = chartOptions[this.type]
    //         if ( this._isMounted ) {
    //             options.aspectRatio = this.$el.clientWidth / this.$el.clientHeight
    //         }
    //         return options
    //     }
    // },


    watch: {

        show(isShown) {
            if ( ! this.chart ) return
            this.chart[ isShown ? 'update' : 'reset' ]()
            this.chart.render()
        },

        data(newData, oldData) {
            if ( ! isEqual(newData, oldData) ) {

                if ( this.chart ) {
                    this.chart.data = newData
                    this.chart.update()
                } else {
                    this.generateChart()
                }
            }
        },

        type(newType, oldType) {
            if (newType !== oldType) {
                this.destroyChart()
                this.generateChart()
            }
        }
    },


    methods: {

        generateChart() {
            if ( this.data && ! this.data.datasets ) {
                throw new Error('Charts: datasets expected in data prop')
            } else {
                this.chart = new Chart(this.$refs.canvas.getContext('2d'), {
                    type: this.type,
                    data: this.data,
                    options: this.options
                })
            }
        },

        destroyChart() {
            if ( this.chart ) this.chart.destroy()
        }
    },


    mounted() {
        this.generateChart()
    },


    beforeDestroy() {
        this.destroyChart()
    }
}
</script>
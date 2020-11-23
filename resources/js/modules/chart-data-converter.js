/**
 * Chart data converter
 */

export default {

    line(data) {

        let dataset = data.map(item => item.value)
        let labels = data.map(item => item.title)

        return {
            datasets: [{
                data: dataset,
                borderColor: data[0].color,
                backgroundColor: data[0].color
            }],
            labels: labels
        }
    },

    doughnut(data) {

        let dataset = data.map(item => item.value)
        let bgColors = data.map(item => item.color)
        let labels = data.map(item => item.title)

        return {
            datasets: [{
                data: dataset,
                backgroundColor: bgColors
            }],
            labels: labels
        }
    }
}
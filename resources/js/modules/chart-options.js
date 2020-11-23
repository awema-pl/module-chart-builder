/**
 * Chart default options
 */

export const line = {
    elements: {
        line: {
            tension: 0
        },
        point: {
            radius: 0,
            hoverRadius: 5
        }
    },
    tooltips: {
        position: 'average',
        mode: 'index',
        intersect: false,
        cornerRadius: 2,
        xPadding: 20,
        yPadding: 20,
        bodySpacing: 10,
        titleMarginBottom: 20
    },
    hover: {
        mode: 'index',
        intersect: false,
    },
    legend: {
        position: 'bottom',
        labels: {
            usePointStyle: true
        }
    }
}


export const pie = {
    plugins: {
        labels: {
            render: 'value',
            position: 'outside',
            textMargin: 10
        }
    },
    legend: {
        position: 'right',
        fontSize: 14,
        labels: {
            usePointStyle: true
        }
    },
    tooltips: {
        cornerRadius: 2,
        xPadding: 20,
        yPadding: 20,
        bodySpacing: 10
    }
}


export const background = {
    elements: {
        line: {
            tension: 0
        },
        point: {
            radius: 0
        }
    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [
            {
                display: false
            }
        ],
        yAxes: [
            {
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    },
    maintainAspectRatio: false
}

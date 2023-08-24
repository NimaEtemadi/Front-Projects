

// Chart Js
const myChart = new Chart(document.getElementById('myChart'), {
    type: 'line',
    data: {
        labels: ['7/1', '7/10', '7/25', '7/28', '7.30'],
        datasets: [{
            backgroundColor: '#FDC816',
            borderColor: '#FDC816',
            data: [1200, 2000, 200, 3000, 300, 200, 100],
            tension: 0.45,
            fill: true,
            pointRadius: 0,
            segment: {
                borderColor: "#FDC816",
                borderWidth: 4,
                backgroundColor: "#FEEEB7",
            }
        }]
    },
    options: {
        plugins: {
            legend: false,
        },
        scales: {
            x: {
                grid: {
                    borderColor: "#EBEBEB",
                    display: false
                }
            },
            y: {
                grid: {
                    borderColor: "#EBEBEB",
                    display: false
                }
            }
        }
    },
});
//---------------------옵션세팅----------------------------------------------
function setmultiLineBarOption() {
    var option = {
        maintainAspectRatio: false,

        scales: {
            yAxes: [{
                position: 'left',
                display: true,
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'value',
                    fontColor: 'rgba(60,141,188,0.7)',
                    fontSize: 20
                },
                ticks: {
                    fontSize: 20,
                    fontColor: 'rgba(60,141,188,0.7)',
                    beginAtZero: true
                },
                gridLines: {
                    color: "rgba(204, 204, 204,0.1)"
                }
            }, {
                position: 'right',
                id: 'turn-y',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "turn",
                    fontColor: '#f39c12',
                    fontSize: 20
                },
                ticks: {
                    fontSize: 20,
                    fontColor: '#f39c12',
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                    labelString: 'value-x'
                },
                gridLines: {
                    color: "rgba(204, 204, 204,0.1)"
                },
                ticks: {
                    fontSize: 20,

                }
            }, {
                id: 'turn-x',
                offset: true,
                display: false,
                stacked: false,
                scaleLabel: {
                    display: false,
                    labelString: 'turn-x'
                },
                ticks: {
                    fontSize: 20,
                }

            }]
        },
        legend: {
            display: true,
            labels: {
                fontSize: 20,
                boxWidth: 70
            }
        }
    };

    return option;
};

function setOptions() {
    let option = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 20,
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 20,
                }
            }]
        },
        legend: {
            display: true,
            labels: {
                fontSize: 20,
                boxWidth: 70
            }
        }
    };

    return option;

};

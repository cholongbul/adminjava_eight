//---------------------옵션세팅----------------------------------------------
function setmultiLineBarOption() {
    var option = {
        maintainAspectRatio: false,

        scales: {
            yAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'value',
                    fontColor: 'rgba(60,141,188,0.7)'
                },
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    color: "rgba(204, 204, 204,0.1)"
                }
            }, {
                id: 'turn-y',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "turn",
                    fontColor: '#f39c12'
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'value-x'
                },
                gridLines: {
                    color: "rgba(204, 204, 204,0.1)"
                }
            }, {
                id: 'turn-x',
                offset: true,
                display: false,
                stacked: false,
                scaleLabel: {
                    display: false,
                    labelString: 'turn-x'
                }

            }]
        },
        legend: {
            display: true
        }
    };

    return option;
};

function setOptions() {
    let option = {
        maintainAspectRatio: false,
        legend: {
            display: true
        }
    };

    return option;

};

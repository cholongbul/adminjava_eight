//데이터세팅
function setdata(label2d, data2d, datanamelist) {
    let data = {
        labels: label2d[0],
        datasets: [{
            label: datanamelist[0],
            data: data2d[0],
            backgroundColor: 'rgba(60,141,188,0.9)',
            borderColor: 'rgba(60,141,188,0.8)',
            pointRadius: false,
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
        }]
    };

    return data;
};

function setmultidata(label2d, data2d, datanamelist) {
    let data = {
        labels: label2d[0],
        datasets: [
            {
                label: datanamelist[1],
                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: data2d[1]
            },
            {
                label: datanamelist[0],
                backgroundColor: 'rgba(210, 214, 222, 1)',
                borderColor: 'rgba(210, 214, 222, 1)',
                pointRadius: false,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: data2d[0]
            },
        ]
    }

    return data;
};

function setmultiLineBarData(label2d, data2d, datanamelist) {
    data = {
        labels: label2d[0],
        datasets: [
            {
                type: 'line',
                label: datanamelist[0],
                data: data2d[0],
                xAxisID: 'turn-x',
                yAxisID: 'turn-y',
                backgroundColor: '#f39c12',
                borderColor: '#f39c12',
                pointRadius: 10,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                fill: false

            },
            {
                type: 'bar',
                label: datanamelist[1],
                data: data2d[1],
                backgroundColor: 'rgba(60,141,188,0.7)',
                borderColor: 'rgba(60,141,188,0.8)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                fill: false
            }
        ]
    }
    return data;
};



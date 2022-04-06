//-----------------------------------차트 생성------------------------------------------
function createBarChart(data, options) {
    var barChartCanvas = $("#barOrMixChart").get(0).getContext("2d");

    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: data,
        options: options
    });
};

function createMultiLineChart(data, options) {
    var multiLineCanvas = $("#barOrMixChart").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
        type: 'line',
        data: data,
        options: options
    });
};

function createLineBarChart(data, options) {

    var multiLineCanvas = $("#barOrMixChart").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
        type: 'bar',
        data: data,
        options: options
    });
}
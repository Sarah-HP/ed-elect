// Manually entered the data on democratic support for charter schools and voucher schools
    var groupChartData = [{ "Charter": 44, "Voucher": null, "Year": 2013 }, { "Charter": 47, "Voucher": null, "Year": 2014 }, { "Charter": 42, "Voucher": 47, "Year": 2015 }, { "Charter": 45, "Voucher": 42, "Year": 2016 }, { "Charter": 34, "Voucher": 44, "Year": 2017 }, { "Charter": 36, "Voucher": 47, "Year": 2018 }];

// New labels into the legend
    var columnsInfo = { "Charter": "Support for Charters", "Voucher": "Support for Vouchers" };

    $("#chart").empty();
    var muliSeriesChartConfig = {
        mainDiv: "#chart",
        colorRange: ["#2a98cd", "#00a300"],
        data: groupChartData,
        columnsInfo: columnsInfo,
        xAxis: "Year",
        yAxis: "Percent Supporting",
        label: {
            xAxis: "Year",
            yAxis: "Percent Supporting"
        },
        requireCircle: false,
        requireLegend: true
    };
    var muliSeriesChart = new multiSeriesLineChart(muliSeriesChartConfig);

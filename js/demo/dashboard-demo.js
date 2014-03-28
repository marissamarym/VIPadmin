$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2013 Q1',
            iphone: 10666,
            ipad: 2200,
            itouch: 2647
        }, {
            period: '2013 Q2',
            iphone: 12778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2013 Q3',
            iphone: 14912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2013 Q4',
            iphone: 13767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2014 Q1',
            iphone: 16810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2014 Q2',
            iphone: 20670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2014 Q3',
            iphone: 21820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2014 Q4',
            iphone: 25073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2015 Q1',
            iphone: 31687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2015 Q2',
            iphone: 37432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: [ 'Actual', 'Regional Average', 'Historical Average'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2008',
            a: 100,
            b: 90
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 50,
            b: 40
        }, {
            y: '2013',
            a: 75,
            b: 65
        }, {
            y: '2014',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});

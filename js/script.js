var min = 200;
// particlesJS.load('landing', 'js/particlesjs-config.json', function() {
//     console.log('callback - particles.js config loaded');
// });

;
(function() {
	$.get("showcase.xml", function(res){
		console.log(res);
	});


    $(".block").each(function() {
        $(this).width(min + Math.random() * 100).height(min + Math.random() * 100);
    });

    $("nav a").click(function() {
        $("html, body").stop(true, true).animate({ scrollTop: $($(this).attr("href")).offset().top }, "fast");
        return false;
    });

    var wall = new Freewall("#showcaseContent");
    wall.reset({
        selector: '.block',
        animate: true,
        cellW: 100,
        cellH: 100,
        onResize: function() {
            wall.fitWidth();
        }
    });

    $(".label").click(function() {
        $(".label").removeClass("active");
        var tag = $(this).addClass("active").data('tag');
        if (tag) {
            wall.filter("." + tag);
        } else {
            wall.unFilter();
        }
    });
    wall.fitWidth();

    Highcharts.chart('profileChart', {

        chart: {
            polar: true,
            type: 'line',
            borderColor: "#B2EBF2"
        },

        title: {
            text: ''
        },

        colors: ["#FFC400"],

        // pane: {
        //     size: '80%'
        // },

        xAxis: {
            categories: ['Independancy', 'Problem Solving', 'Details Minded', 'Teamwork', 'Fast Learning', 'Responsibility'
            ],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            tickInterval: 1,
            lineWidth: 0,
            min: 5,
            max: 10,
            labels: {
                enabled: false
            }
        },

        tooltip: {
        	//backgroundColor: "#B2EBF2",
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        // legend: {
        //     align: 'right',
        //     verticalAlign: 'top',
        //     y: 70,
        //     layout: 'vertical'
        // },

        series: [{
            name: 'Score',
            data: [9, 9, 9, 9, 8, 9],
            pointPlacement: 'on',
            showInLegend: false
        }],

        credits: {
            enabled: false
        }

    });
}());
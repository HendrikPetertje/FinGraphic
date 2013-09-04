function chart_one(){

	var barChartData = {
		barShowStroke : false,
		labels : ["M & V","M","V"],
		datasets : [
			{
				fillColor : "rgba(46,204,113,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				data : [636,345,291]
			},
			{
				fillColor : "rgba(39,174,96,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				data : [7906,4334,3572]
			}
		]
	}

	var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData,{
		barShowStroke : false,
	});
}

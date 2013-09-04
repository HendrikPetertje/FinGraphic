function unemployment_one(){

	var barChartData = {
		labels : ["M & V","M","V"],
		datasets : [
		{
			strokeColor : "rgba(231,76,60,1)",
			fillColor : "rgba(231,76,60,0.75)",
			data : [636,345,291]
		},
		{
			strokeColor : "rgba(192,57,43,1)",
			fillColor : "rgba(192,57,43,0.75)",
			data : [7906,4334,3572]
		}
		]
	}

	var myLine = new Chart(document.getElementById("unemployment_one").getContext("2d")).Bar(barChartData,{
		barStrokeWidth : 1,
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function unemployment_two(){

	var barChartData = {
		labels : ["M & V","M","V"],
		datasets : [
		{
			strokeColor : "rgba(192,57,43,1)",
			fillColor : "rgba(192,57,43,0.75)",
			data : [8,8,8.1]
		},
		]
	}

	var myLine = new Chart(document.getElementById("unemployment_two").getContext("2d")).Bar(barChartData,{
		barStrokeWidth : 1,
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,

		scaleOverride : true,

		//** Required if scaleOverride is true **
		//Number - The number of steps in a hard coded scale
		scaleSteps : 5,
		//Number - The value jump in the hard coded scale
		scaleStepWidth : 0.1,
		//Number - The scale starting value
		scaleStartValue : 7.7,
	});
}

function consumers_prices(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [112.77,113.66,114.87,114.97,115,114.57,115.51]
		}
		]
	}

	var myLine = new Chart(document.getElementById("consumers_prices").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function food_prices(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [113.98,115.53,115.94,115.43,116.01,116.06,115.99]
		}]
	}

		var myLine = new Chart(document.getElementById("food_prices").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function alcohol(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [134.64,135.84,141.03,142.58,142.59,142.15,142.59]
		}]
		
	}

		var myLine = new Chart(document.getElementById("alcohol").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function clothing(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [89.12,93.38,114.46,114.50,113.45,104.44,94.25]
		}]
	}

		var myLine = new Chart(document.getElementById("clothing").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function housing(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [114.49,114.51,114.30,114.20,114.17,114.18,117.44]
		}]
	}

		var myLine = new Chart(document.getElementById("housing").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function health(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [105.80,105.73,105.07,105.92,105.63,105.49,105.25]
		}]
		
	}

		var myLine = new Chart(document.getElementById("health").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function transport(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [119.15,120.70,120.55,120.19,120.41,120.65,122.63]
		}]
		
		
	}

		var myLine = new Chart(document.getElementById("transport").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function communication(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [96.21,96.27,95.12,95.55,93.51,92.86,92.45]
		}]
		
	}

		var myLine = new Chart(document.getElementById("communication").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function recreation(){

	var lineChartData = {
		labels : ["Jan","Feb","Maa","Apr","Mei","Jun","Jul"],
		datasets : [
		{
			fillColor : "rgba(230,126,34,0.75)",
			strokeColor : "rgb(211,84,0)",
			pointColor : "rgb(211,84,0)",
			pointStrokeColor : "#fff",
			data : [100.79,102.23,101.99,102.62,103.11,103.75,107.31]


		}]
		
	}

		var myLine = new Chart(document.getElementById("recreation").getContext("2d")).Line(lineChartData,{
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}

function income_particular(){

	var barChartData = {
		labels : ["Primair","Bruto","Besteedbaar","GBI"],
		datasets : [
		{
			strokeColor : "rgba(39,174,96,1)",
			fillColor : "rgba(39,174,96,0.75)",
			data : [43.6,57.4,33.2,23.4]
		}
		]
	}

	var myLine = new Chart(document.getElementById("income_particular").getContext("2d")).Bar(barChartData,{
		barStrokeWidth : 1,
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "Montserrat",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 10,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "black",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : false,
	});
}


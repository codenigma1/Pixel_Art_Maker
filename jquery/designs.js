// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// selecting gridHeight and gridWidth and submit that input.
$("#sizePicker").submit(function (event){
	let rows, cols;
	event.preventDefault();
	rows = $("#inputHeight").val();
	cols = $("#inputWeight").val();
	makeGrid(rows, cols);
/*	console.log(rows, cols);*/
});


// Making matrix by loops
function makeGrid(rows, cols){
	$("tr").remove();
	for (let i = 1; i <= rows; i++) {
		$("#pixelCanvas").append("<tr class= tableRow" + i + "></tr>");
		for (let j = 1; j <= cols; j++) {
			$(".tableRow" + i).append("<td></td>");
		}

	}

	// adding and removing color in the cells by attr.("style")

	$("td").click(function removeHue(){
		const pigments = $("#colorPicker").val();

		if ($(this).attr("style")) {
			$(this).removeAttr("style");
			
		} else {
			$(this).attr("style", "background-color:" + pigments);
		}
	});

	$(".gridErase").click(function reset(){
		$("#pixelCanvas").empty();
	});
}





// This is the second way.............
/*$(document).ready(function (){
	$("#sizePicker").submit(function makeGrid(event){
		$("tr").remove();
		var row = $("#inputHeight").val();
		var col = $("#inputWidth").val();
		for (i = 1; i <= row; i++){
			$("table").append("<tr></tr>");
			for (j = 0; j <= col; j++){
				$("tr").append("<td></td>");
				$("tr").attr("class", "cell");
			}
		}
		event.preventDefault();

		$(".cell").click(function(tick){
			var color = $("#colorPicker").val();
			$(tick.target).css("background-color", color);
		});
	});
});
*/


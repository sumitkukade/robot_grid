var X = 1;
var Y = 1;
var gridSize;
// function that builds a grid in the "container"
function onLoad() { 
	gridSize = document.getElementById('gridSize');
	gridSize = gridSize.value;
	createGrid(X,Y);
}
function createGrid(x ,y) {
	for (var rows = 0; rows < gridSize; rows++) {
		for (var columns = 0; columns < gridSize; columns++) {

			if(rows == 5 && colums == 5){
				$("#container").append("<div class='coin'></div>");
				$(".coin").width(480/gridSize);
				$(".coin").height(480/gridSize);
			}
			if(rows == y && columns == x){
				$("#container").append("<div class='robot_grid'></div>");
				$(".robot_grid").width(480/gridSize);
				$(".robot_grid").height(480/gridSize);
			}
			else{
				$("#container").append("<div class='grid'></div>");
				$(".grid").width(480/gridSize);
				$(".grid").height(480/gridSize);
			}
		};
	};
};

// function that clears the grid
function clearGrid(){
	$(".grid").remove();
	$(".robot_grid").remove();
};  
/*
 * function that prompts the user to select the number of boxes in a new grid
 * the function then also creates that new grid
 */
function refreshGrid(){
	/*var z = prompt("Enter Row");*/
	clearGrid();
	createGrid(X ,Y);
};

/*
 * function to read robot action from textarea
 */ 
/*starting position of robot*/
function robot_actions(action){

	/*alert(action);*/
	/*	*/
	clearGrid();
	/*console.log(action)*/
	/*console.log(typeof(action))*/
	if(action == "moveLeft")
	{
		X = X-1;
	}
	if(action == "moveRight")
	{
		X = X+1;
	}
	if(action == "moveUp")
	{
		Y = Y-1;
	}
	if(action == "moveDown")
	{
		Y = Y+1;
	}
	createGrid(X,Y);
	/*alert(action)*/
}

/*
 * Reads the robot action file
 */
function read_file_content(){
	var file = document.getElementById("get_file").files[0];
	var reader = new FileReader();
	alert(gridSize);

	reader.readAsText(file, "UTF-8");

	reader.onload = function (evt) 
	{
		var temp = evt.target.result;
		var allLines = temp.split(/\r\n|\n/);
		for(var i=0;i<(allLines.length);i++)
		{
			/*setTimeout(function() { robot_actions(allLines[i]); }, 1000);*/
			if(allLines[i] == "")
			{
				console.log("empty String In Input File");
				continue;
			}
			robot_actions(allLines[i]);
			console.log(i);
			alert(i);
		}
	}
}
/*
 * prompt the user to create a new grid
 */
$(document).ready(function() {
	refreshGrid();
});

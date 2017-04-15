var X = 2;
var Y = 3;
// function that builds a grid in the "container"
function createGrid(size , x ,y) {
	for (var rows = 0; rows < size; rows++) {
		for (var columns = 0; columns < size; columns++) {
			if(rows == y && columns == x){
				$("#container").append("<div class='robot_grid'></div>");
				$(".robot_grid").width(480/size);
				$(".robot_grid").height(480/size);
			}
			else{
				$("#container").append("<div class='grid'></div>");
				$(".grid").width(480/size);
				$(".grid").height(480/size);
			}
		};
	};
};

// function that clears the grid
function clearGrid(){
	$(".grid").remove();
	$(".robot_grid").remove();
};  

var yCord = (function () {
	var i = 2;
	return function () {
		return i;
	}
})();

var xCord = (function () {
	var j = 3;
	return function () {
		return j;
	}
})();

/*
 * function that prompts the user to select the number of boxes in a new grid
 * the function then also creates that new grid
 */
function refreshGrid(){
	/*var z = prompt("Enter Row");*/
	clearGrid();
	createGrid(10 ,X ,Y);
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
	if(action == "")
	{
		console.log("empty String In Input File");
	}
	createGrid(10,X,Y);
	/*alert(action)*/
}

/*
 * Reads the robot action file
 */
function read_file_content(){
	var file = document.getElementById("get_file").files[0];
	var reader = new FileReader();
	reader.readAsText(file, "UTF-8");

	reader.onload = function (evt) 
	{
		var temp = evt.target.result;
		var allLines = temp.split(/\r\n|\n/);
		for(var i=0;i<(allLines.length);i++)
		{
			/*setTimeout(function() { robot_actions(allLines[i]); }, 1000);*/
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

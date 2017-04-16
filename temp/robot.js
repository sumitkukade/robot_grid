var grid_box;

function startGrid()
{
	grid_area.start();
	grid_box = new component(32, 32, "red", 0, 0);

}
var grid_area = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 256;
		this.canvas.height = 256;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(update_all, 20);
	},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
function component(width, height, color, x, y) {
	this.width = 32;
	this.height = 32;
	this.x = x;
	this.y = y;
	this.update = function(){
		ctx = grid_area.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
function update_all() {
	grid_area.clear();
	grid_box.update();
	grid_area.x += 1;
}
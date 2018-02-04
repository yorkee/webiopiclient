/*
This is a mock when we are not deploying to webiopi for development purpose only
 */


var _webiopi;

function w() {
	if (_webiopi == undefined) {
		_webiopi = new WebIOPi();
	}
	
	return _webiopi;
}

function webiopi() {
	return w();
}


function WebIOPi() {
	this.ready = function(cb){
		cb();
	}

	this.createTable = function() {

	}

	this.RPiHeader = function(){
		return {
			createTable: this.createTable
		};
	}

	/*
RPiHeader().createTable("content");	
	 */

}
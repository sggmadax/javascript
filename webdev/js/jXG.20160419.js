var jXG = 
{
	counter : 0,
	name: "Sun Xiao Guo",
	getXGName: function () {return this.name;},
	getXGDate: function () {return "today is " + new Date().getDate();},
	addOne0 : function () {
							return function() {
								var c=0;
								console.log( "non-closure count:" + c );								
							};},							

	addOne1 : function () {
							return function() {
								console.log( "non-closure count:" + jXG.counter ++ );		
								return jXG.counter;	
							};},
							
	getCounterFunction: function () {
							var c=0;	
							return function() {
								c++;
								console.log( "closure count:" + c );
								return c;
							};}	,
							
	getCounter: function () { 
						jXG.counter++;
						return jXG.counter ;
						}

} 
(function( $ ){
    $.fn.writeAProgram = function(){
      /*
			Clone the shape on click
			Append it to programContainer and make it draggable
			*/
			var shapeArr = $("#shapeContainer > div");
			for (var i = 0; i < shapeArr.length; i++) {
				$(shapeArr[i]).bind('mouseup' ,function() {
					$(this).clone().appendTo("#programContainer").draggable();
				});
			}
    };
})( jQuery );
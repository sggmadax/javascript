var bytePuzzle = {};

bytePuzzle.puzzle = {
	byteCount : 4,
	puzzleBuffer : null
}
	
bytePuzzle.generatePuzzle = function (){
		var isDup = false;
		var i = 0;		
		bytePuzzle.puzzle.puzzleBuffer = new ArrayBuffer(bytePuzzle.puzzle.byteCount);
		var puzzleView = new Uint8Array(bytePuzzle.puzzle.puzzleBuffer);
			
		while (i < bytePuzzle.puzzle.byteCount) {
			isDup = false;
			puzzleView[i] = Math.round(Math.random()*9) ;
			
			// check the number 
			for (var m = 0; m < i; m++) {
				if (puzzleView[i] == puzzleView[m]) {
					isDup = true;
					break;
				}
			}

			if (!isDup) {
				i++;
			}
		}
} // end of GeneratePuzzle	

	
bytePuzzle.toString = function () {		
	var puzzleView = new Uint8Array(bytePuzzle.puzzle.puzzleBuffer);
	return puzzleView.toString();
}
	
	
//}//  end of bytePuzzle.Puzzle
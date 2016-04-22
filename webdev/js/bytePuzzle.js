/*
date = 2016/4/23 AM 00:00
*/

var bytePuzzle = {
	byteCount : 4,
	//puzzleBuffer : null
	puzzle : null
};

/*
bytePuzzle.puzzle = {
	byteCount : 4,
	puzzleBuffer : null
}
*/


	
bytePuzzle.generatePuzzle_1 = function () {
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


bytePuzzle.generatePuzzle = function () {
	var isDup = false;
	var i = 0;		
	var Buffer = new ArrayBuffer(bytePuzzle.byteCount);
	var view = new Uint8Array(Buffer);
		
	while ( i < bytePuzzle.byteCount ) {
		isDup = false;
		view[i] = Math.round(Math.random()*9) ;
		
		// check the number 
		for (var m = 0; m < i; m++) {
			if (view[i] == view[m]) {
				isDup = true;
				break;
			}
		}

		if (!isDup) {
			i++;
		}
	}		
	return view ;
} // end of GeneratePuzzle	




bytePuzzle.compareBytes = function (byteanswer) {
	var Matched_As = 0; // total of matched position and byte
	var Matched_Bs = 0; // total of matched bytes with wrong position 
	//var puzzleView = new Uint8Array(this.puzzleBuffer);
	var puzzleView = this.puzzle;
	var answerView = new Uint8Array(byteanswer);

		for (var i = 0; i < this.byteCount; i++)
		{
			for (var j = 0; j < this.byteCount; j++)
			{
				if (answerView[j] == puzzleView[i])
				{
					if (i == j)
						Matched_As++;
					else
						Matched_Bs++;
				}
				else
				{
				}
			}
		}
	return { A:Matched_As, B:Matched_Bs };
}	

	
bytePuzzle.toString = function () {		
	//var puzzleView = new Uint8Array(bytePuzzle.puzzle.puzzleBuffer);
	//return puzzleView.toString();
	return bytePuzzle.puzzle.toString();
}
	
	
//}//  end of bytePuzzle.Puzzle
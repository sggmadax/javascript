var bytePuzzle = {
	var noBytes = 4;
	var puzzleBuffer = new ArrayBuffer(noBytes);
	
	function generatePuzzle(){
		var isDup = false;
		var i = 0;		
		var puzzleView = new Uint8Array(noBytes);
			
		while (i < NOBytes)
		{
			isDup = false;
			puzzle[i] = Math.round(Math.random()*10) ;
			
			// check the number 
			for (var m = 0; m < i; m++)
			{
				if (puzzleView[i] == puzzleView[m])
				{
					isDup = true;
					break;
				}
			}

			if (!isDup)
			{
				i++;
			}
		}
    } // end of GeneratePuzzle	

	function toString() {
		var puzzleView = new Uint8Array(puzzleBuffer);
		return puzzleView.toString();
	}
	
	
	}//  end of bytePuzzle
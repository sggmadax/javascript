var bytePuzzle = {
//var puzzleBuffer = new ArrayBuffer(noBytes);
	
	noBytes : 4,
	puzzleBuffer: undefined,
	// = new ArrayBuffer(noBytes),
	
	generatePuzzle: function (){	
		var isDup = false;
		var i = 0;		
		var no = this.noBytes;
		this.puzzleBuffer = new ArrayBuffer(no);
		var puzzleView = new Uint8Array(this.puzzleBuffer);
			
		while (i < no)
		{
			isDup = false;
			puzzleView[i] = Math.round(Math.random()*10) ;
			
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
    }, // end of GeneratePuzzle	

	compareBytes:	function(byteanswer)
        {
            var Matched_As = 0; // total of matched position and byte
            var Matched_Bs = 0; // total of matched bytes with wrong position 
			var puzzleView = new Uint8Array(this.puzzleBuffer);
			var answerView = new Uint8Array(byteanswer);

            for (var i = 0; i < this.noBytes; i++)
            {
                for (var j = 0; j < this.noBytes; j++)
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
        },
	toZi: function () {
		var puzzleView = new Uint8Array(this.puzzleBuffer);
		return puzzleView.toString();
	}
	
	
	}//  end of bytePuzzle
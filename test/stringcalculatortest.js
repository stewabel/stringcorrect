var assert = require("assert")
var StringCorrect = require("../stringcorrect")

describe ('StringCorrect', function (){
	describe('#suggest()', function(){
		it('should suggest single word after being taught', function(){
			var ORIGINAL = "Original";
			var CORRECTED = "Corrected";
			var sc = Object.create(StringCorrect);

			sc.correct(ORIGINAL, CORRECTED);
			var result = sc.suggest(ORIGINAL);

			assert.equal(result[0], CORRECTED);
		})

		it('should learn two words', function(){
			var ORIGINAL1 = "Original1";
			var ORIGINAL2 = "Original2";
			var CORRECTED1 = "Corrected1";
			var CORRECTED2 = "Corrected2";
			sc = Object.create(StringCorrect);
			
			sc.correct(ORIGINAL1, CORRECTED1);
			sc.correct(ORIGINAL2, CORRECTED2);

			assert.equal(sc.suggest(ORIGINAL1)[0], CORRECTED1);
			assert.equal(sc.suggest(ORIGINAL2)[0], CORRECTED2);
		})
	})
})


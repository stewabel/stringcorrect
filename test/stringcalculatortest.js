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
	})
})


var correct = [];

exports.correct = function(original, corrected){
	correct = [corrected];
}

exports.suggest = function(word){
	return correct;
}

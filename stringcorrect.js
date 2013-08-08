var correct = {};

exports.correct = function(original, corrected){
	correct[original] = corrected;
}

exports.suggest = function(word){
	return [correct[word]];
}

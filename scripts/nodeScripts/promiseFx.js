function printStat (){
	return new Promise(function(resolve,reject){resolve('resolved');
		reject('some error')})};
		printStat().then(function(value){
			console.log(value)
		})

//set timeout function
//setTimeout(function(){
  //  console.log("hello")

//console.log('thread moving on')
//},15000)

const promise = new Promise(function(resolve,reject){
	resolve({
		name:'brad',
		age:35
	})
	reject('some error occured')
})
promise.then(function(value){
	console.log(value)})
	.catch(function(error){
		console.log(error)
	})


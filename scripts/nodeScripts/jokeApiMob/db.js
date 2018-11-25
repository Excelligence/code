const mongoose = require('mongoose');
const details= require('./details')
mongoose.connect(details.mlabDet);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log( 'we\'re connected!')
});
const quotesSchema = new mongoose.Schema({
	quote:{
		type:String,
		unique:true
	},
	author:{
		type:String
	}
})

const Quotes= mongoose.model('Quotes', quotesSchema);

Quotes.create({ quote: 'You\’re always learning. The problem is, sometimes you stop and think you understand the world. This is not correct. The world is always moving. You never reach the point you can stop making an effort.',author:'Paulo Coelho' }, function (err, small) {
  if (err) return handleError(err);
  // saved!
});

//Quotes.deleteMany({ quote: /change/i }, function (err) {
  //if (err) return handleError(err);
  // deleted at most one tank document
//});


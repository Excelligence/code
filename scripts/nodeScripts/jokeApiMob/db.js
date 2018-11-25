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
module.exports=Quotes


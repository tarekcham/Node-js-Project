const mongoose = require('mongoose');
const Store = mongoose.model('Store');
mongoose.Promise = global.Promise;


exports.homePage = (req, res)=>{
	//res.cookie('name', 'wes is cool', {maxAge: 900000});
	res.render("index")
};

exports.addStore = (req,res)=> {
	res.render('editStore', {
		title: 'Add Store' 
	});
}

// exports.createStore = (req,res)=> {
// 	console.log(req.body);
// 	res.json(req.body);
// };

exports.createStore = async(req, res) => {
	console.log(req.body);
	const store = new Store(req.body);
	await store.save();
	
	res.redirect('/');
};


exports.saySomeThing = (something)=> {
	console.log(something);
}
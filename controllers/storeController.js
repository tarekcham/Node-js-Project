exports.homePage = (req, res)=>{
	//res.cookie('name', 'wes is cool', {maxAge: 900000});
	res.render("index")
}

exports.saySomeThing = (something)=> {
	console.log(something);
}
var io = require("socket.io")();

io.on('connection',function(socket){

	socket.emit("news",{"Hello":"World"});

	console.log("User connected");


	socket.on('disconnect',function(data){

		console.log('A User Disconnected');
	});

	socket.on('hoops',function(data){
		console.log('Hoops',data);

	});

	socket.on('send message',function(data){

		var message = data;
		console.log(message);

		io.emit('new message',{'message':message});



	});

});






module.exports = io;


(function(){

  var socket = io.connect('http://localhost:3000');

  var app = new Vue({
    el:'body',
    data:{
      message:'Some text',
      chats:[]
    },
    ready:function(){

      var self = this;
      socket.on('new message',function(data){

        console.log(data);
        self.chats.push(data);

        console.log(self.chats);

      });
    },
    methods:{
      sendMessage:function(){


        socket.emit('send message',this.message);
        this.message = '';

      },
      socketListeners:function(){

      }
    }
  });

})();

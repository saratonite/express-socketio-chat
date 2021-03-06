
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

        self.chats.push(data);


      });
    },
    methods:{
      sendMessage:function(){

        if(this.message){
          socket.emit('send message',this.message);
          this.message = '';  
        }

      },
      socketListeners:function(){

      }
    }
  });

})();

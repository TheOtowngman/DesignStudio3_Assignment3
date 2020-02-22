//A script for handling all of the network communication needed between the viewer client and the server.

//Declare a socket for communication.
let socket = io();
//A component for connecting and receiving information from the server.
AFRAME.registerComponent('web-socket', {
    init:function(){
        //default connect event
        socket.on('connect', function() {
            console.log("connected!");
        });

        //When the client receives a packet with the name player-position take the data in and use it to change the position of the player icon.
        socket.on('player-position', function(data){
            //Set the y to 0 so there isn't any overlap.
            data.y = 0;
            //Set the position of the player box to the incoming data.
            document.querySelector('#playerBox').setAttribute('position', data);
        });
        //When the client receives a packet with the name player-rotation then change the rotation of the player icon.
        socket.on('player-rotation', function(data){
            document.querySelector('#playerBox').setAttribute('rotation', '0 ' + data + ' 0');
        });
    }
});
//A component for sending data to the server.
AFRAME.registerComponent('move-buttons', {
    init : function(){
        //When the player presses a move button then send the id of the button to the server.
        this.el.addEventListener('click', function(event){
            socket.emit('move', this.getAttribute('id'));
        });
    }
});
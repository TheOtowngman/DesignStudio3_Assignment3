//A script for handling all of the network communication between the runner and the server.
let socket = io();
AFRAME.registerComponent('update', {
    schema: {
        frameCounter: {type:'int', default:0},
        updateInterval: {type:'int', default: 10}
    },
    
    init : function(){
        //default connect event
        socket.on('connect', function() {
            console.log("connected!");
        });
        //If the client receives a packet with the name move-instruction then check the incoming data and change the name of value of the instruction.
        socket.on('move-instruction', function(data){
            //Decalre a varaible for the instructions to go into.
            var instruction = '';
            //Depending on the data coming in, change the value of the instructions.
            switch(data){
                case 'forwardButton':
                    instruction = 'Forward';
                    break;
                case 'backwardButton':
                    instruction = 'Backward';
                    break;
                case 'rightButton':
                    instruction = 'Right';
                    break;
                case 'leftButton':
                    instruction = 'Left';    
                    break;
            }
            //Set the value of the instruction text.
            document.querySelector('#instructionsText').setAttribute('text', 'value: ' + instruction + '; width: 1.0; align: center');
        });
    },
    //A function that runs continuously, like a while loop.
    tick: function(){
        //Increment the frame counter.
        this.data.frameCounter += 1;
        
        //Update the position of the plane for instructions.
        document.querySelector('#instructionsGroup').setAttribute('rotation', '0 ' + document.querySelector('#playerCamera').getAttribute('rotation').y + ' 0');

        //If the frame counter is equal to the interval frame count, then send the data to the server.
        if(this.data.frameCounter == this.data.updateInterval){
            this.data.frameCounter = 0;
            socket.emit('position', this.el.object3D.position);
            socket.emit('rotation', document.querySelector('#playerCamera').getAttribute('rotation').y);
        }
    },
    
})
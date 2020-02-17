AFRAME.registerComponent('make-teleport-pads', {
    init: function(){
        const positions = 
        [[0.22, 0, -3.75], 
        [-5.665, 0, -3.75],
        [3.0, 0, -3.75],
        [9.0, 0, -3.75],
        [11.843, 0, -3.75],
        [15, 0, -3.75],
        [21, 0, -3.75],
        [3, 0, -6.600],
        [5.8, 0, -6.6],
        [5.8, 0, -9.5],
        [8.9, 0, -9.5],
        [11.8, 0, -6.6],
        [11.8, 0, -9.8],
        [15, 0, -6.5],
        [17.8, 0, -9.8],
        [17.8, 0, -6.5],
        [21, 0, -6.5],
        [27, 0, -3.8],
        [27, 0, -6.5],
        [24, 0, -6.5],
        [27, 0, -12],
        [24, 0, -12],
        [24, 0, -9.5],
        [20.5, 0, -9.5],
        [20.5, 0, -12.5],
        [15, 0, -12.5],
        [15, 0, -15.5],
        [21, 0, -15.5],
        [21, 0, -18.5]];
        console.log(positions.length);
        for(i = 0; i < positions.length; i++){
            this.addPad(positions[i]);
        }
    },

    addPad : function(position){
        let teleElem = document.createElement('a-entity');
        teleElem.setAttribute('id', 'tele_' + i);
        teleElem.setAttribute('class', 'teleportPad');
        teleElem.setAttribute('mixin', 'teleportMixin');
        teleElem.setAttribute('position', position[0] + ' ' + position[1] + ' ' + position[2]);
        
        let scene = document.querySelector('a-scene');
        this.el.appendChild(teleElem);
    }
});
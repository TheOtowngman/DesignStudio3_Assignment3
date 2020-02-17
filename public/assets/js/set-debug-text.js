AFRAME.registerComponent('set-debug-text', {
    init : function(){
        const parentID = this.el.getAttribute('id');
        
        let debugElem = document.createElement('e-entity');
        debugElem.setAttribute('text', 'value:' + parentID + '; width: 4;');
        debugElem.setAttribute('mixin', 'debugTextMixin');
        

        let scene = document.querySelector('#' + parentID);
        document.getElementById(parentID).appendChild(debugElem);
    }
});
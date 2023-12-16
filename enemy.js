AFRAME.registerComponent("enemies" , {
    init:function(){
       var posx = [2 , -1 ,0] 
       var posz = [-1, -3, -2]
       for(var i=0;i<posx.length;i++){
        var entity = document.createElement("a-entity")
        entity.setAttribute('id',  "enemy" + i)
        entity.setAttribute("position" , {x:posx[i] , y:1.5 ,z:posz[i]})
        entity.setAttribute("gltf-model" , "assets/player/scene.gltf")
        entity.setAttribute("scale",{x:200 ,y:200 ,z:200})
        entity.setAttribute("static-body", {
        });
        var scene = document.querySelector("#scene")
        scene.appendChild(entity)
       }
    }
})

AFRAME.registerComponent('enemy-bullet', {
    schema: {
        
    },

    init: function () {
      // Do something when component first attached.
      this.shootBullet()
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});

AFRAME.registerComponent('bullets', {


  init: function () {
    // Do something when component first attached.
    this.shooting()
  },

  shooting: function () {
    // Do something when component's data is updated.
    window.addEventListener("keydown", (e) => {
      //console.log(e.which)
      if (e.key === "z") {

        var bullet = document.createElement("a-entity")
        // bullet.setAttribute("gltf-model" , "assets/7.62_mm_bullet/scene.gltf")
        bullet.setAttribute("gltf-model", "assets/7.62_mm_bullet/scene.gltf")
        bullet.setAttribute("scale", {
          x: 0.01,
          y: 0.01,
          z: 0.01
        })

        var camera = document.querySelector("#cameraNav")
        var pos = camera.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x ,
          y: pos.y +2,
          z: pos.z - 3,
        })
        var cam = document.querySelector("#cameraElement").object3D
        var direction = new THREE.Vector3()
        cam.getWorldDirection(direction)
        console.log(direction)
        bullet.setAttribute("velocity", direction.multiplyScalar(-30))
        bullet.setAttribute("dynamic-body", {
          mass: "50",
          shape: "sphere",
        })
        bullet.addEventListener("collide", this.removeBullet)
        var scene = document.querySelector("#scene")

        scene.appendChild(bullet)


      }
    })
  },
  removeBullet : function(e){
    var belement = e.detail.target.el 
    var element_hit = e.detail.body.el 
    console.log(element_hit )
    if(element_hit.id.includes("enemy")){
      element_hit.setAttribute("visible" ,false)
     /* var impulse = new CANNON.Vec3(-2, 2 , 1)
      var worldPoint = new CANNON.Vec3().copy(
        element_hit.getATtribute("position")
      )
      element_hit.body.applyImpulse(impulse , worldPoint)
     */
      belement.removeEventListener("collide" , this.removeBullet)
    
      var scene = document.querySelector("#scene")
     // scene.removeChild(element_hit)
     // scene.removeChild(belement)
    }
  },

});

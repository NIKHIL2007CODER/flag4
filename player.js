AFRAME.registerComponent("player-movement",{
    schema:{
        moveX: { type: "number", default :1},
        moveY: { type: "number", default :1},
        moveZ: { type: "number", default :1},
    },
    init:function(){
        this.walking()
    },
    walking:function(){

        window.addEventListener("keydown",(e)=>{
            var element =this.el.getAttribute("position")
            if(e.key === "ArrowUp"){
                this.el.setAttribute("position" , {
                    x:element.x , 
                    y:element.y , 
                    z:element.z+=0.033
                })
            }
            if(e.key === "ArrowLeft"){
                this.el.setAttribute("position" , {
                    x:element.x-=0.033 , 
                    y:element.y , 
                    z:element.z
                })
            }
            if(e.key === "ArrowRight"){
                this.el.setAttribute("position" , {
                    x:element.x+=0.033 , 
                    y:element.y , 
                    z:element.z
                })
            }
            if(e.key === "ArrowDown"){
                this.el.setAttribute("position" , {
                    x:element.x , 
                    y:element.y , 
                    z:element.z-=0.033
                })
            }
        })
    }
})
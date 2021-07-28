window.addEventListener("load",function (event) {
    
    let contentImg=document.getElementById("contentImgs");
    
    let canvas = document.getElementById("canvas");
    canvas.style.width = "100%";
    canvas.style.backgroundColor ="red";
    let context=canvas.getContext("2d");
    let height = [];
    
    this.document.addEventListener("change",(eventChange)=>{
        contentImg.innerHTML="";
        Array.from(eventChange.target.files)
        .forEach((element,index) => {
            debugger
            let img = this.document.createElement("img");
            //img.style.width= "50%" ;
           // img.style.height= "50%" ;
            img.style.display="none" ;
            img.id = `img${index}`;
            let fileReader = new FileReader();
            fileReader.onloadend =()=>{
                img.src = fileReader.result;
                img.onload = function(){
                    debugger
                    height.push(parseInt(this.height));
                    canvas.style.height = `${height.reduce((previous,current)=>previous+current)}px`;
                }
            }
            fileReader.readAsDataURL(element);
            contentImg.appendChild(img);
        });
        
        
    },false);
    
},false);
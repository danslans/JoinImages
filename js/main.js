window.addEventListener("load",function (event) {
    
    let contentImg=document.getElementById("contentImgs");
    let canvas = document.getElementById("canvas");
    this.document.addEventListener("change",(eventChange)=>{
        contentImg.innerHTML="";
        Array.from(eventChange.target.files)
        .forEach((element,index) => {
            let img = this.document.createElement("img");
            img.height = "100";
            img.width = "100";
            img.id = `img${index}`;
            let fileReader = new FileReader();
            fileReader.onloadend =()=>{
                img.src = fileReader.result;
            }
            fileReader.readAsDataURL(element);
            contentImg.appendChild(img);
        });
        
        
    },false);
    
},false);
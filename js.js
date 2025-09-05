let modeBtn= document.querySelector("#mode");
let body = document.querySelector("body");
let curMode= "light";

modeBtn.addEventListener("click" ,() => {
    if(curMode === "light"){
      curMode = "dark";
      body.classList.add("0e0e1a");
      body.classList.remove("beige");
    } else{
      curMode= "light";
      body.classList.add("beige");
      body.classList.remove("0e0e1a");
    }

    console.log(curMode);  
})
@media screen and (max-width: 2000px) {
            body{
                min-width: fit-content;
            }
            .box{
                flex-direction: column;
            }
            .verticaltitle, .verticaldesc{
                left: 45px;
            }
            .secondsection .box{
                width: 50vw;
            }
            nav{
                flex-direction: column;
            }
            .secondsection .vertical{
                height: unset;
            }
            .first{
                flex-direction: column-reverse;
            }
            .leftSection{
                width: 100% !important;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .secondsection{
                height: 140vh;
            }
            .secondsection{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .image-top{
                top: 133px;
            }
            .rightSection{
                width: 721px !important;
                display: flex;
                justify-content: center;
            }
            .rightSection img{
                width: 45vw;
                margin-bottom: 73px;

            }

            
        } 
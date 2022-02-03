
        // variables for menu task bar
        var nav_bar = document.querySelector("#nav_content");
        var menuBtn = document.getElementById("btn");
        var menu = document.getElementById("open_btn");
        // variables for scroll up
        var scroll_up = document.querySelector(".scroll-up");
        scroll_up.addEventListener("click", function(){
            window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            });
        });


        menuBtn.onclick=function(){
            if(nav_bar.style.right == "-500px"){
                nav_bar.style.right = "100px";
                
                menu.src = "imgs/close_btn.png";
            }
            else{
                nav_bar.style.right="-500px";
                menu.src="imgs/btn.png";
            }
        }
    
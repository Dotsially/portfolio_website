

function main(){


    const home_div = document.createElement("div");
    home_div.className = "home_page";
    
    const home_img = document.createElement("img");
    home_img.className = "home_image";
    home_img.src = "resources/images/thumbnail.png"

    home_div.append(home_img);

    document.body.append(home_div); 
}

main();
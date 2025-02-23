

function main(){
    const main_div = document.createElement("div");
    main_div.className = "main_page"; 

    const about_text =document.createElement("h1");
    about_text.innerText = "About Me";
    about_text.className = "about_text";

    const text = document.createElement("p");
    text.innerText = "Game developer and Computer engineering student. I'm a huge fan of voxels, low level programming and retro games. \n Check the projects tab for all my work!"

    main_div.appendChild(about_text);
    main_div.appendChild(text);
    document.body.append(main_div); 
}

main();
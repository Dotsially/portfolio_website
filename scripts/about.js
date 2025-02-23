

function main(){
    const main_div = document.createElement("div");
    main_div.className = "main_page"; 

    const text = document.createElement("p");
    text.innerText = "Game developer and Computer engineering student. I have a huge passion for game development and low level programming."
    text.className = "about_text";





    main_div.appendChild(text);
    document.body.append(main_div);
}

main();
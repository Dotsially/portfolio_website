function createButton(id, href, target){
    const button = document.createElement("a");
    button.className ="header_link";
    button.id = id;
    button.target = target;
    button.href = href;

    const button_text = document.createElement("p");
    button_text.innerText =id;
    button.appendChild(button_text);
    return button
}

function createButtonImage(id, href, target, img_src){
    const button = document.createElement("a");
    button.className ="header_link";
    button.id = id;
    button.target = target;
    button.href = href;

    const button_image = document.createElement("img");
    button_image.src = img_src;
    button_image.className = "button_image";
    button.appendChild(button_image);
    return button
}

function header_main(){
    const header_div = document.createElement("div");
    header_div.className = "header_div";

    const header_title = document.createElement("a");
    header_title.href = "index.html";
    header_title.className = "header_title";
    
    const image = document.createElement("img");
    image.src = "resources/images/favicon-32x32.png";
    header_title.append(image);

    const title = document.createElement("h1");
    title.innerText = "Dotsially";
    header_title.append(title);

    const button_div = document.createElement("div");
    button_div.className = "buttons_div";

    const home_button = createButton("PROJECTS", "projects.html", "_self");
    const github_button = createButtonImage("GITHUB", "https://github.com/Dotsially", "_blank", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg");
    
    header_div.appendChild(header_title);

    button_div.appendChild(home_button);
    button_div.appendChild(github_button);
    header_div.appendChild(button_div);

    document.body.append(header_div);
}

header_main();
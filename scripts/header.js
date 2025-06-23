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

function header_main(){
    const header_div = document.createElement("div");
    header_div.className = "header_div";

    const title = document.createElement("h1");
    const titleLink = document.createElement("a");
    titleLink.href = "index.html";
    titleLink.innerText = "Dotsially";
    title.append(titleLink);

    const button_div = document.createElement("div");
    button_div.className = "buttons_div";

    const home_button = createButton("PROJECTS", "projects.html", "self");
    const github_button = createButton("GITHUB", "https://github.com/Dotsially", "new");
    
    header_div.appendChild(title);

    button_div.appendChild(home_button);
    button_div.appendChild(github_button);
    header_div.appendChild(button_div);

    document.body.append(header_div);
}

header_main();
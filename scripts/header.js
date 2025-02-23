
function onLinkClick(element) {
    console.log(element.id);
    localStorage.setItem("current_active", element.id);
    window.location.href = element.href;
}

function createButton(id, href){
    const button = document.createElement("a");
    button.className ="header_link";
    button.id = id;
    button.href =href;
    button.addEventListener('click', (e) => {
        e.preventDefault();
        onLinkClick(button);
    });
    const button_text = document.createElement("p");
    button_text.innerText =id;
    button.appendChild(button_text);
    return button
}

function header_main(){
    const header_div = document.createElement("div");
    header_div.className = "header_div";

    const title = document.createElement("h1");
    title.innerText = "Dotsially's Portfolio"

    const button_div = document.createElement("div");
    button_div.className = "buttons_div"

    const home_button = createButton("HOME", "index.html");
    const about_button = createButton("ABOUT ME", "about.html");
    const project_button = createButton("PROJECTS", "projects.html");
    
    header_div.appendChild(title);

    button_div.appendChild(home_button);
    button_div.appendChild(about_button);

    button_div.appendChild(project_button);
    header_div.appendChild(button_div);

    const contrast_div = document.createElement("div");
    contrast_div.className = "header_constrast";
    header_div.appendChild(contrast_div);

    document.body.append(header_div);
}

window.onload = function(){
    const active = document.getElementById(localStorage.getItem("current_active"));
    if(active){
        console.log(active.id);
        active.className = "header_link_active";
    }
    else{
        home.className = "header_link_active";
    }
}

header_main();
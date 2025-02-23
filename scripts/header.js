
function onLinkClick(element) {
    console.log(element.id);
    sessionStorage.setItem("current_active", element.id);
    if(element.target == "new"){
        window.open(element.href);
    }
    else{  
        window.location.href = element.href;    
    }
}

function createButton(id, href, target){
    const button = document.createElement("a");
    button.className ="header_link";
    button.id = id;
    button.target = target;
    button.href = href;
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

    const home_button = createButton("HOME", "index.html", "self");
    const github_button = createButton("GITHUB", "https://github.com/Dotsially", "new");
    const project_button = createButton("PROJECTS", "projects.html", "self");
    
    header_div.appendChild(title);

    button_div.appendChild(home_button);
    button_div.appendChild(project_button);
    button_div.appendChild(github_button);
    header_div.appendChild(button_div);

    const contrast_div = document.createElement("div");
    contrast_div.className = "header_constrast";
    header_div.appendChild(contrast_div);

    document.body.append(header_div);
}

window.onload = function(){
    var active;
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("hasCodeRunBefore", true);
        active = document.getElementById("HOME");
    }
    else{
        active = document.getElementById(sessionStorage.getItem("current_active"));
    }

    if(active){
        active.className = "header_link_active";
    }
}

header_main();
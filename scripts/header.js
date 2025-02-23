
function onLinkClick(element) {
    console.log(element.id);
    localStorage.setItem("current_active", element.id);
    window.location.href = element.href;
}

function header_main(){
    const header_div = document.createElement("div");
    header_div.className = "header_div";

    const pages_div = document.createElement("div");
    pages_div.className = "pages_div"

    const title = document.createElement("h1");
    title.innerText = "Dotsially's Portfolio"

    const home = document.createElement("a");
    home.className ="header_link";
    home.id = "home";
    home.href ="index.html";
    home.addEventListener('click', (e) => {
        e.preventDefault();
        onLinkClick(home);
    });
    const home_text = document.createElement("p");
    home_text.innerText ="HOME";
    home.appendChild(home_text);

    const projects = document.createElement("a");
    projects.className ="header_link";
    projects.id = "projects"
    projects.href ="projects.html";
    projects.addEventListener('click', (e) => {
            e.preventDefault();
            onLinkClick(projects);
    });
    const project_text = document.createElement("p");
    project_text.innerText ="PROJECTS";
    projects.appendChild(project_text);

    
    header_div.appendChild(title);

    pages_div.appendChild(home);
    pages_div.appendChild(projects);
    header_div.appendChild(title);
    header_div.appendChild(pages_div);

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
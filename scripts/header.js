
function to_home(){
    window.location.href = "index.html";
}

function to_projects(){
    window.location.href = "projects.html";
}

function main(){
    const header = document.createElement("h1");
    header.innerText = "Dotsially's Portfolio"

    const first_button = document.createElement("button");
    first_button.type = "button";
    first_button.innerText = "HOME";
    first_button.className ="header_button";
    first_button.onclick = to_home;
    

    const second_button = document.createElement("button");
    second_button.type = "button";
    second_button.innerText = "PROJECTS";
    second_button.className ="header_button";
    second_button.onclick = to_projects ;

    document.body.append(header);
    document.body.append(first_button);
    document.body.append(second_button);
}

main();
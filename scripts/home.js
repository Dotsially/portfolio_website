

function CreateHomeProjects(home_projects_div, projects){
    for(let i = 0; i < 3; i++){
        const project_hyperlink = document.createElement("a");
        project_hyperlink.href = projects[i].url;
        project_hyperlink.target = projects[i].target;
        project_hyperlink.className = "home_project_instance"

        const project_thumbnail = document.createElement("img");
        project_thumbnail.className = projects[i].image_class;
        project_thumbnail.src = projects[i].image;

        const project_name = document.createElement("p");
        project_name.className = "home_project_text";
        project_name.innerText = projects[i].name;

        project_hyperlink.appendChild(project_thumbnail);
        project_hyperlink.appendChild(project_name);


        home_projects_div.append(project_hyperlink);
    }
}



async function main(){
    const response  = await fetch("resources/data/projects.json");
    const json_string = await response.json();
    const projects = json_string["projects"];

    const home_div = document.createElement("div");
    home_div.className = "home_page";
    
    const home_img = document.createElement("img");
    home_img.className = "home_image";
    home_img.src = "resources/images/thumbnail.png";

    const home_name = document.createElement("div");
    home_name.innerText = "Dotsially's Portfolio";
    home_name.className = "home_name";

    home_div.append(home_img);
    home_div.append(home_name);
    

    const home_projects_div = document.createElement("div");
    home_projects_div.className = "home_projects_div";

    CreateHomeProjects(home_projects_div, projects);

    document.body.append(home_div); 
    document.body.append(home_projects_div);
}

main();
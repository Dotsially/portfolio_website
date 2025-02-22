var languages_dictionary = {
    "C" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "C#" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    "C++" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "JavaScript" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "HTML" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "Java" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "Odin": "https://plugins.jetbrains.com/files/22933/681982/icon/default.png"
};

function set_project_languages(column_div, projects, i){
    const languages = projects[i].languages;
    for(let j = 0; j < languages.length; j++){
        const img_language = document.createElement("img");
        img_language.src = languages_dictionary[languages[j]];
        let image_size = 30;
        img_language.width = image_size;
        img_language.height = image_size;
        column_div.appendChild(img_language);
    }
}

async function main(){
    const response  = await fetch("resources/data/projects.json")
    const json_string = await response.json()
    const projects = json_string["projects"]

    const row_div = document.createElement("div");
    row_div.className = "row";

    for(let i = 0; i < projects.length; i++){
        const column_div = document.createElement("div");
        column_div.className = "column";

        const project_hyperlink = document.createElement("a");
        project_hyperlink.href = projects[i].url;
        project_hyperlink.target = "_blank";

        const project_thumbnail = document.createElement("img");
        project_thumbnail.className = projects[i].image_class;
        project_thumbnail.src = projects[i].image;

        const project_name = document.createElement("p");
        project_name.className = "hover_text";
        project_name.innerText = projects[i].name;
        
        project_hyperlink.appendChild(project_thumbnail);
        project_hyperlink.appendChild(project_name);

        column_div.appendChild(project_hyperlink);
        set_project_languages(column_div, projects, i)
        row_div.appendChild(column_div);
    }

    document.body.append(row_div);
}


main();
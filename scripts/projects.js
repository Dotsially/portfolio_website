const languages_dictionary = {
    "C" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "C#" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    "C++" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "JavaScript" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "HTML" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "Java" : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "Odin": "https://plugins.jetbrains.com/files/22933/681982/icon/default.png"
};

function createLanguageDiv(languages) {
    const language_div = document.createElement("div");
    language_div.className = "language_div";

    const text = document.createElement("p");
    text.innerText = "Languages:";
    language_div.appendChild(text);

    for (let j = 0; j < languages.length; j++) {
        const img_language = document.createElement("img");
        img_language.src = languages_dictionary[languages[j]];
        img_language.width = 30;
        img_language.height = 30;

        if (j === 0) img_language.classList.add("img_push");
        if (j === languages.length - 1) img_language.classList.add("img_last");

        language_div.appendChild(img_language);
    }
    return language_div;
}

function CreateProjects(project_div, projects){
    for(let i = 0; i < projects.length; i++){
        const project_hyperlink = document.createElement("a");
        project_hyperlink.href = projects[i].url;
        project_hyperlink.target = projects[i].target;

        const project_thumbnail = document.createElement("img");
        project_thumbnail.className = projects[i].image_class;
        project_thumbnail.src = projects[i].image;

        const project_name = document.createElement("p");
        project_name.className = "hover_text";
        project_name.innerText = projects[i].name;

        project_hyperlink.appendChild(project_thumbnail);
        project_hyperlink.appendChild(project_name);

        if (projects[i].languages && projects[i].languages.length > 0) {
            const language_div = createLanguageDiv(projects[i].languages);
            project_hyperlink.appendChild(language_div);
        }

        project_div.append(project_hyperlink);
    }
}

async function main(){
    const response  = await fetch("resources/data/projects.json");
    const json_string = await response.json();
    const projects = json_string["projects"];

    const projects_div = document.createElement("div");
    projects_div.className = "grid";

    CreateProjects(projects_div, projects);

    document.body.append(projects_div);
}

main()
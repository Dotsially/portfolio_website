
const response  = await fetch("./resources/data/projects.json")
const json_string = await response.json()
const projects = json_string["projects"]
console.log(projects)

const row_div = document.createElement("div");
row_div.className = "row";

for(let i = 0; i < projects.length; i++){
    const column_div = document.createElement("div");
    column_div.className = "column";

    const a_hyperlink = document.createElement("a");
    a_hyperlink.href = projects[i].url;
    a_hyperlink.target = "_blank";

    const img_hyperlink = document.createElement("img");
    img_hyperlink.className = projects[i].image_class;
    img_hyperlink.src = projects[i].image;

    const p_hyperlink = document.createElement("p");
    p_hyperlink.className = "hover_text";
    p_hyperlink.innerText = projects[i].name;
    
    a_hyperlink.appendChild(img_hyperlink);
    a_hyperlink.appendChild(p_hyperlink);
    column_div.appendChild(a_hyperlink);
    row_div.appendChild(column_div);
}

document.body.append(row_div);

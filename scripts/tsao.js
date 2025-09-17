
const tools = [
    "Unity",
    "Blender",
    "C#"
];

function main(){
    const main_div = document.createElement("div");
    main_div.className = "main_page"; 

    const thumbnail = document.createElement("img");
    thumbnail.src = "resources/images/tsao.gif";
    thumbnail.className = "thumbnail";

    const title = document.createElement("h1");
    title.className = "project_title";
    title.innerText = "To Slay An Oni";

    const about = document.createElement("h1");
    about.innerText = "About";  
    about.className = "project_header";

    const about_text = document.createElement("p");
    about_text.className = "project_text";
    about_text.innerHTML = "A mobile game created in Unity during my Game Design & Development minor. To Slay An Oni is a survival adventure game with rogue-lite elements. You will travel across distant lands inspired by Japanese folklore. Slay spirits and yokai, grow stronger, and complete small quests to find new weapons, all in your quest to defeat Raijin, the god of the storms." +
    "<br></br>Made with: ";

    const toolsList = document.createElement("ul");
    tools.forEach(tool => {
        const li = document.createElement("li");
        li.textContent = tool;
        toolsList.appendChild(li);
    });
    toolsList.className = "text_list";

    const store_div = document.createElement("div");
    store_div.className = "store_div";
    const store_page = document.createElement("a");
    store_page.href = "https://5lashstudios.itch.io/tsao";
    store_page.target = "_blank";
    store_page.innerText = "itch.io Page";
    store_page.className = "store_page";

    const store_page2 = document.createElement("a");
    store_page2.href = "https://play.google.com/store/apps/details?id=com.slashstudios.tsao&hl=en";
    store_page2.target = "_blank";
    store_page2.innerText = "Google Play";
    store_page2.className = "store_page";

    main_div.appendChild(title);
    main_div.appendChild(thumbnail);
    main_div.appendChild(about);
    main_div.appendChild(about_text);
    main_div.appendChild(toolsList);
    store_div.appendChild(store_page);
    store_div.appendChild(store_page2);
    main_div.appendChild(store_div);
    document.body.append(main_div); 
}

main();
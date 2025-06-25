const tools = [
    "Unity",
    "C#"
];


const tasks = [
        "Implemented the backend for sound effects and music.",
        "Implemented the backend for visual effects.",
        "Implemented the backend for the levels system.",
        "Implemented the backend for UI.",
        "Implemented the frontend for UI.",
        "Implemented the final boss of the game.",
        "Created the AI for some NPCs.",
        "Created several vfx and particle systems.",
        "Wrote Shaders for the UI.",
        "Worked on the gun recoil mechanics.",
        "And of course a lot of bug fixes and refactoring..."
];

function main(){
    const main_div = document.createElement("div");
    main_div.className = "main_page"; 

    const thumbnail = document.createElement("img");
    thumbnail.src = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3380820/extras/Untitled_video_-_Made_with_Clipchamp__8_.gif?t=1738518895"
    thumbnail.className = "thumbnail";

    const title = document.createElement("h1");
    title.className = "project_title";
    title.innerText = "ReSpaced";

    const about = document.createElement("h1");
    about.innerText = "About";  
    about.className = "project_header";

    const about_text = document.createElement("p");
    about_text.className = "project_text";
    about_text.innerHTML = "ReSpaced is a fast-paced first-person shooter where you master gun recoil to leap across platforms, battle various enemies, and upgrade your weapon to escape an overrun space station. <br>It currently has over 5000 downloads!</br>" +
    "<br></br>Made with:";

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
    store_page.href = "https://store.steampowered.com/app/3380820/ReSpaced/";
    store_page.target = "_blank";
    store_page.innerText = "Steam Page";
    store_page.className = "store_page";

    const devcomment = document.createElement("h1");
    devcomment.innerText = "Dev Commentary";  
    devcomment.className = "project_header";

    const firstParagraph = document.createElement("p");
    firstParagraph.innerHTML = "I worked on ReSpaced as a Developer. Elevated Ants was a studio created solely for our minor Game Design & Development." +
    "<br>While it was a studio that only consisted of students we all worked hard as professionals on this title. </br>" +    
    "My resposibilities were to implement art assets into the engine. The dev team was small so everyone had to be very flexible that's why I also did several other tasks such as:"
    firstParagraph.className = "project_text";

    const taskList = document.createElement("ul");
    taskList.className = "text_list";
    
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });

    const secondParagraph = document.createElement("p");
    secondParagraph.innerHTML = "I learned a lot during the development of ReSpaced and I'm super grateful to have been surrounded by such talented people in the team. " +
    "<br>The game wouldn't have been finished without the entire team giving it their all! </br>" +
    "<br>One of the biggest things I've struggled with was implementing the final boss. I wanted it to be fun but also challenging. </br>" +
    "The final boss was designed and implemented 3 weeks before our release deadline. I made many prototypes but none of them were fun to fight against." +
    "<br>Due to time constraints I had to settle with the one we have now. While he's not the most challenging version of the boss he's definitely the coolest looking.</br>";
    secondParagraph.className = "project_text";

    const img_bts = document.createElement("img");
    img_bts.src = "resources/images/respaced_bts.png";
    img_bts.className = "thumbnail";

    main_div.appendChild(title);
    main_div.appendChild(thumbnail);
    main_div.appendChild(about);
    main_div.appendChild(about_text);
    main_div.append(toolsList);
    store_div.appendChild(store_page);
    main_div.appendChild(store_div);
    main_div.appendChild(devcomment);
    main_div.appendChild(firstParagraph);
    main_div.appendChild(taskList); 
    main_div.appendChild(secondParagraph);
    main_div.appendChild(img_bts);
    document.body.append(main_div); 
}

main();
const tools = [
    "Unity",
    "C#"
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


    main_div.appendChild(title);
    main_div.appendChild(thumbnail);
    main_div.appendChild(about);
    main_div.appendChild(about_text);
    main_div.append(toolsList);
    store_div.appendChild(store_page);
    main_div.appendChild(store_div);
    document.body.append(main_div); 
}

main();
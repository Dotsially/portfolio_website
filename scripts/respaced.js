

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
    about_text.innerHTML = "ReSpaced is a fast-paced first-person shooter where you master gun recoil to leap across platforms, battle various enemies, and upgrade your weapon to escape an overrun space station." +
    "<br></br>Made with: " +
    "<ul>" +
    "<li>Unity</li>" +
    "<li>C#</li>" +
    "</ul>";


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


    const text = document.createElement("p");
    text.innerHTML = "I worked on ReSpaced as a Developer. Elevated Ants was a studio created solely for our minor Game Design & Development." +
    "<br>While it was a studio that only consisted of students we all worked hard as professionals on this title. </br>" +    
    "My resposibilities were to implement art assets into the engine. The dev team was small so everyone had to be very flexible that's why I also did several other tasks such as:" +
    "<ul>" +
    " <li>Implemented the backend for sound effects and music.</li>" +
    " <li>Implemented the backend for visual effects.</li>" +
    " <li>Implemented the backend for the levels system.</li>" +
    " <li>Implemented the backend for UI.</li>" +
    " <li>Implemented the frontend for UI.</li>" +
    " <li>Implented the final boss of the game.</li>" +
    " <li>Created the AI for some NPCs.</li>" +
    " <li>Created several vfx and particle systems.</li>" +
    " <li>Wrote Shaders for the UI.</li>" +
    " <li>Worked on the gun recoil mechanics.</li>" +
    " <li>And of course a lot of bug fixes and refactoring...</li>" +
    "</ul>" +
    "I learned a lot during the development of ReSpaced and I'm super grateful to have been surrounded by such talented people in the team \n" +
    "The game would have been finished without the entire team giving it their all! <br></br>" +
    "<br>One of the biggest things I've struggled with was implementing the final boss. I wanted it to be fun but also challenging. </br>" +
    "The final boss was designed and implemented 3 weeks before our release deadline. I made many prototypes but none of them were fun to fight against." +
    "<br>Due to time constraints I had to settle with the one we have now. While he's not the most challenging version of the boss he's definitely the coolest looking.</br>";
    text.className = "project_text";

    const img_bts = document.createElement("img");
    img_bts.src = "resources/images/respaced_bts.png";
    img_bts.className = "img_bts";

    main_div.appendChild(title);
    main_div.appendChild(thumbnail);
    main_div.appendChild(about);
    main_div.appendChild(about_text);
    store_div.appendChild(store_page);
    main_div.appendChild(store_div);
    main_div.appendChild(devcomment);
    main_div.appendChild(text);
    main_div.appendChild(img_bts);
    document.body.append(main_div); 
}

main();
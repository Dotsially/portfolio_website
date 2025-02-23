
function main(){
    const main_div = document.createElement("div");
    main_div.className = "main_page"; 

    const thumbnail = document.createElement("img");
    thumbnail.src = "https://play-lh.googleusercontent.com/Uf0CkIlCne6JfuEHFr-LFX4zNSV6HnP1N7zqp8mOI3Ym860bsU37uMSsssh6g7VTQl1v=w1052-h592";
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
    "<br></br>Made with: " +
    "<ul>" +
    "<li>Unity</li>" +
    "<li>C#</li>" +
    "</ul>";

    const devcomment = document.createElement("h1");
    devcomment.innerText = "Dev Commentary";  
    devcomment.className = "project_header";


    const text = document.createElement("p");
    text.innerText = "A project mainly inspired by Vampire Survivors. I was the Artist / Technical Artist on the team but I also did quite a bit of programming\n" +
    "I worked on the sound effect system, particles, enemy wave spawning, game feel and wrote quite a few shaders. \n" +
    "Outside of that ALL the art in the game was created by me. I used a pixelation shader in blender to render models into sprites sheets. " +
    "This workflow was so fast I managed to create a lot of assets in 6 weeks! \n" +
    "I was also the one that came with the idea for a web version for the itch.io page ;)";
    text.className = "project_text";

    const img_bts = document.createElement("img");
    img_bts.src = "resources/images/tsao_bts.png";
    img_bts.className = "img_bts";

    main_div.appendChild(title);
    main_div.appendChild(thumbnail);
    main_div.appendChild(about);
    main_div.appendChild(about_text);
    main_div.appendChild(devcomment);
    main_div.appendChild(text);
    main_div.appendChild(img_bts);
    document.body.append(main_div); 
}

main();
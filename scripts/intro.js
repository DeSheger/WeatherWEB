const intro = () =>{
    const introduction = document.querySelector(".intro");
    const main = document.querySelector(".banner");

    introduction.style.display="none";
    main.style.display="flex";
}

setTimeout(intro,5000);
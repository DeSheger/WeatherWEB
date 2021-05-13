let pogoda={icon:0,weather:0,temp:0,wind:0};



const weather=(val)=>{

    const xhr=new XMLHttpRequest();

    let name=document.querySelector('.banner__text').value||val;
    xhr.addEventListener("load",e=>{
    console.log(xhr.response);
    let data=JSON.parse(xhr.response);


    pogoda.icon=data.weather[0].icon;
    pogoda.weather=data.weather[0].description.toUpperCase();
    pogoda.temp=data.main.temp;
    pogoda.wind=data.wind.speed;

    document.querySelector('.banner__icon').innerHTML=`<img src='http://openweathermap.org/img/wn/${pogoda.icon}@2x.png' width='100px' height='100px'>`;
    document.querySelector('.banner__desc').innerHTML=pogoda.weather;
    document.querySelector('.banner__temp').innerHTML=pogoda.temp+"C";
    document.querySelector('.banner__wind').innerHTML=pogoda.wind+" m/s";

});
    xhr.open("GET",`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6&units=metric`, true);
    xhr.send();
}
weather('warsaw');





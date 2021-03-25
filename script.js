var pogoda={weather:0,temp:0,wind:0};

var loader=()=>{
    document.getElementById('loader1').style.display='none';
    document.getElementById('search').style.display='block';
}


var weather=(name)=>{

    var xhr=new XMLHttpRequest();


    xhr.addEventListener("load",e=>{
    console.log(xhr.response);
    let data=JSON.parse(xhr.response);
    pogoda.weather=data.weather[0].description.toUpperCase();
    pogoda.temp=data.main.temp;
    pogoda.wind=data.wind.speed;
    document.getElementById('description').innerHTML=pogoda.weather;
    document.getElementById('temp').innerHTML=pogoda.temp+"C";
    document.getElementById('wind').innerHTML=pogoda.wind+" m/s";

});
    xhr.open("GET",`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6&units=metric`, true);
    xhr.send();
}


var search=()=>{
    
    var input=document.getElementById('text').value;
    console.log(input);
    weather(input);
    document.getElementById('main').style.display='flex';
    
}


setTimeout(loader,4700);

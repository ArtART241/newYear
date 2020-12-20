let music;

$(document).ready(function () {
    
    music = new Howl({
        src: ["audio/track2.mp3, audio/track1.mp3, audio/track3.mp3"],
        loop: true,
        volume: 0.3
    });


});

$("#tree>img").click(function (e) { 
    music.stop();
    let name = e.target.id
    console.log(name);
    if (name == "toy1") {
        music.play(0);
    } else if (name == "toy2") {
        music.play(1);
    } else if (name == "toy3") {
        music.play(2);
    }
    
        
});




let timer = setInterval(function(){
    // Time of new year
    let newYear = new Date("1 January 2021 00:00:00");
    // current time
    let currentTime = new Date();
    // difference
    let diff = newYear - currentTime;
    
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let days2 = hours % 24;
    let hours2 = minutes % 60;
    let minutes2 = seconds % 60;

    $("#seconds").text(minutes2);
    $("#minutes").text(hours2 + " :");
    $("#hours").text(days2 + " :");
    $("#days").text(days + " :");
}, 1000);
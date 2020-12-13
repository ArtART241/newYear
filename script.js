let music;

$(document).ready(function () {
    
    music = new Howl({
        src: ["audio/track2.mp3"],
        loop: true,
        volume: 0.2
    });


});

$("#player>img").click(function (e) { 
    if(e.target.id != "isPlaying") {
        music.play();
        e.target.id = "isPlaying";
    }
        
});
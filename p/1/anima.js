var fps = 30;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
function draw(){

}
function tick(){
    requestAnimationFrame(tick);
    now=Date.now();
    delta=now-then;
    if(delta>interval){
        then=now-(delta%interval);
        draw();
    }
}
tick();

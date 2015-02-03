/**
 * Created by sunqi on 15-1-30.
 */
var Paction=true;
function pause(){
    Paction=!Paction;
    window.frames['fuck'].action=Paction;
    console.log(window.frames['fuck'].action);
}
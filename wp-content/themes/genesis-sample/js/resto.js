
function responsivemenu() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("myTopbutton");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " menu_is_opened";
    } else {
        x.className = "topnav";
        y.className = "wprmenu_icon";
    }
}
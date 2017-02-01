/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

document.getElementById("details").onchange = function () {
    if (this.selectedIndex !== 0) {
        window.location.href = this.value;
    }
};

//bron: stackoverflow.com/questions12287672/links-in-select-dropdown-options
var elem;
var show;

var elem = document.getElementById("ster");
elem.addEventListener('click', show);
var show = function () {
    elem.classList.toggle('favoriet');
};

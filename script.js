let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-content");
function opentab(tab){
    let x=document.getElementById(tab);
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab");
}

let navop=document.getElementById("nav-ops");

function closemenu(){
    navop.style.right="-200px";
}

function openmenu(){
    navop.style.right="0";
}

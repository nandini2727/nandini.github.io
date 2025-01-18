
let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-content");
function opentab(element,tab){
    let x=document.getElementById(tab);
    // tablinks.forEach((tablink) => {
    //     tablink.classList.remove("active-link");
    // });
    // tabcontents.forEach((tabcontent)=>{
    //     tabcontent.classList.remove("active-tab");
    // });
    for(const tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    element.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab");
}

let navop=document.getElementById("nav-ops");

function closemenu(){
    navop.style.right="-200px";
}

function openmenu(){
    navop.style.right="0";
}


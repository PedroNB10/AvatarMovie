const video = document.getElementById("video");

const videoLink = document.getElementById("video").src


function openModal(){
    let modal = document.getElementById("modal_id")
    modal.classList.add("open")
    video.setAttribute("src", videoLink);
    
    
}

function removeModal(){
    let modal = document.getElementById("modal_id")
    modal.classList.remove("open")
  	video.setAttribute("src", "");


}


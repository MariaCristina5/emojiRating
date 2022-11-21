const starEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colors = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0);
//adaugare de event pe fiecare stea selectata de rating
starEl.forEach((starEl, index) =>{
    starEl.addEventListener("click", () =>{
        updateRating(index);
    })
})

//adaugare de clasa active (din css si html) pe fiecare stea de rating
function updateRating(index){
    starEl.forEach((starEl, idx) =>{
        if(idx < index + 1) {
            starEl.classList.add("active");
        }else{
            starEl.classList.remove("active");
        }
    });

    //schimbare de emoji pe fiecare stea de rating
    emojisEl.forEach(emojiEl =>{
        emojiEl.style.transform = `translateX(-${index * 50}px)` 
        
        //adaugare de culoare pe fiecare emoji
        emojiEl.style.color = colors[index];
        });
}




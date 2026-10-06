var istatus = document.querySelector("h5")
var btn = document.querySelector("#btn")
var check=0;
btn.addEventListener("click", function() {
    if (check==0) {
        istatus.innerHTML = " Friends"
        istatus.style.color = "green"
        btn.innerHTML = "RemoveFriend"
        check=1;
        console.log("Friend Added")
    }
    else{
        istatus.innerHTML = " Strangers"
        istatus.style.color = "red"
        btn.innerHTML = "AddFriend"
        check=0;
        console.log("Friend Removed")
    }


})
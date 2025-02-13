let home = document.getElementById("home")
let guest = document.getElementById("guest")
let homeScore = 0
let guestScore = 0

function incrementHome(num) {
    homeScore += num
    home.innerText = homeScore
}

function incrementGuest(num) {
    guestScore += num
    guest.innerText = guestScore
}
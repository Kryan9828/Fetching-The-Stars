//Variables for DOM Elements
let dateTag = document.getElementById("date")
let imgTitle = document.getElementById("imgTitle")
let description = document.getElementById("description")
let likeButton = document.createElement("button")
likeButton.className = "button"
let unlikeButton = document.createElement("button")
unlikeButton.className = "button"
let script = document.getElementById("script")

// Funtion to create img for app from fetch
const printPhoto = function(data){
    imgTitle.id = "imgTitle"
    imgTitle.innerText = `${data[0].title}`
    let img = document.createElement("img")
    img.className = "image"
    img.id = "photo"
    img.src = data[0].hdurl
    imgTitle.before(img)
    dateTag.innerText = `Date Image taken/published: ${data[0].date}`
    description.innerText = `${data[0].explanation}`
    likeButton.innerText = "Like"
    script.before(likeButton)    
}


// Fetch function for Nasa Photo
const retrieveNasaPhoto = function(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=s7J66psQK1puvP7gbT3I7Vje52DW2b0cWtufych9&count=1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        printPhoto(data)
    })
}

retrieveNasaPhoto()

// Functions for liking and Unliking Photos
const likePhoto = function(){
    unlikeButton.innerText = "Unlike"
    document.body.replaceChild(unlikeButton, likeButton)
}

const unlikePhoto = function(){
    document.body.replaceChild(likeButton, unlikeButton)
    // newPhotoQuestion.innerText = `We're sorry you don't like this photo would you care to see a new image?/n`
}

// Event Listeners
likeButton.addEventListener("click", function(){
    likePhoto()
})

unlikeButton.addEventListener("click", function(){
    unlikePhoto()
})
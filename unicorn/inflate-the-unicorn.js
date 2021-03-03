  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

// Create variables to house the status of each unicorn
var unicorn1 = {
  inflationStatus: 0,
  idTag: "unicorn1",
}

var unicorn2 = {
  inflationStatus: 0,
  idTag: "unicorn2",
}

var unicorn3 = {
  inflationStatus: 0,
  idTag: "unicorn3",
}

// Create a variable to point to the unicorn images
var images = [
  "./images/unicorn-0.png",
  "./images/unicorn-1.png",
  "./images/unicorn-2.png",
  "./images/unicorn-3.png"
]

function inflateAudio () {
  document.getElementById("inflate").play()
}

function deflateAudio () {
  document.getElementById("deflate").play()
}

function inflate(unicornId) {
  if (unicornId.inflationStatus < 3) {
    unicornId.inflationStatus ++
    document.getElementById(unicornId.idTag).src = images[unicornId.inflationStatus]
    inflateAudio()
  } else {
    unicornId.inflationStatus = 0
    document.getElementById(unicornId.idTag).src = images[unicornId.inflationStatus]
    deflateAudio()
  }
}
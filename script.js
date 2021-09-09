document.body.addEventListener('keyup', function (event) {
  playSound(event.code.toLowerCase())
})

document
  .querySelector('.composer button')
  .addEventListener('click', function () {
    let song = document.querySelector('#input').value
    if (song !== '') {
      let songArray = song.split('')
      playComposition(songArray)
    }
  })

function playSound(sound) {
  let elementSound = document.querySelector(`#s_${sound}`)
  let elementKey = document.querySelector(`div[data-key="${sound}"]`)

  if (elementSound) {
    elementSound.currentTime = 0
    elementSound.play()
  }

  if (elementKey) {
    elementKey.classList.add('active')

    setTimeout(() => {
      elementKey.classList.remove('active')
    }, 300)
  }
}

function playComposition(songArray) {
  let wait = 0
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`)
    }, wait)

    wait += 250
  }
}

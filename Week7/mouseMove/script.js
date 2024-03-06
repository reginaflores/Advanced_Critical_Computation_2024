const containerElement = document.querySelector('.container')

containerElement.addEventListener('mousemove', function(event) {
  document.querySelector('.coordinates-x').innerHTML = event.x
  document.querySelector('.coordinates-y').innerHTML = event.y
  
  const lightness = Math.floor(event.x / 1021 * 100)

  document.querySelector('.container').style.backgroundColor = `hsl(180, 50%, ${lightness}%)`
})
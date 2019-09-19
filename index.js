document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  const moves = document.querySelector('#moves-container')

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      moves.insertAdjacentHTML("beforeend", `<li>down</li>`)
    }
    else if (e.key === "ArrowUp") {
      moves.insertAdjacentHTML("beforeend", `<li>up</li>`)
    }
    else if (e.key === "ArrowLeft") {
      moves.insertAdjacentHTML("beforeend", `<li>left</li>`)
    }
    else if (e.key === "ArrowRight") {
      moves.insertAdjacentHTML("beforeend", `<li>right</li>`)
    }
    else if (e.key === "Backspace") {
      if (moves.children.length) {
        moves.removeChild(moves.lastChild)
      }
      else {
        alert("No moves to delete")
      }
    }
  })

  const moveButton = document.querySelector('#move-button')
  moveButton.addEventListener("click", function(e) {
    let cycle = setInterval(function() {
      if (moves.children.length) {
        const direction = moves.firstChild.innerText
        move(direction)
        moves.removeChild(moves.firstChild)
      }
      else {
        clearInterval(cycle)
      }
    }, 500)

    // if (moves.children.length) {
    //   const direction = moves.firstChild.innerText
    //   move(direction)
    //   moves.removeChild(moves.firstChild)
    // }
    // else {
    //   alert("No moves to makes")
    // }
  })
})

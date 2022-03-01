document.querySelector(".button span").onclick = function () {
  let name = window.prompt("ادخل اسمك");

  if (name == null || name == "") {
    document.querySelector(".button").remove();
    document.querySelector(".text span").innerHTML = "Unknown";
  } else {
    document.querySelector(".button").remove();
    document.querySelector(".text span").innerHTML = name;
    }

    // Add Timer 
    
    let count = setInterval(counter, 1000);
    function counter() {
    let timer = document.querySelector(".timer span");
    timer.innerHTML = parseInt(timer.innerHTML) - 1
        if (timer.innerHTML < 10) {
            timer.classList.add("count");
        }
        if (timer.innerHTML == 0) {
            clearInterval(count);
            timer.classList.remove("count");
            setTimeout(() => {
                document.querySelector(".game-over").style.display = "block"
            }, 1000)
        }
        if (timer.innerHTML > 1 && timer.innerHTML <= 7) {
            document.getElementById("end").play()
      }
      let allMatch = boxChild.filter(box => box.classList.contains("match"));
      if (allMatch.length == 20) {
        setTimeout(() => document.querySelector(".winner").style.display = "block", 1000);
        clearInterval(count)
      }
}
 
};
let boxes = document.querySelector(".boxes");

let boxChild = Array.from(boxes.children);

boxChild.forEach((box) => {
  box.style.order = Math.floor(Math.random() * boxChild.length);

  box.addEventListener("click", () => {
    addClasses(box);
  });
});

function addClasses(box) {
  box.classList.add("is-flipped");

  let allboxes = boxChild.filter((box) => box.classList.contains("is-flipped"));
  if (allboxes.length == 2) {
    checker(allboxes[0], allboxes[1]);
    noClick();
  }


  let allMatch = boxChild.filter(box => box.classList.contains("match"));

  if (allMatch.length == 20) {
    setTimeout(() => document.querySelector(".winner").style.display = "block", 1000);
  }
}

function checker(firstBox, secondBox) {
  if (firstBox.dataset.name == secondBox.dataset.name) {
    firstBox.classList.add("match");
    secondBox.classList.add("match");
      
    firstBox.classList.remove("is-flipped");
      secondBox.classList.remove("is-flipped"); 
      
      document.getElementById("true").play()
  } else {
    let nam = document.querySelector(".tries span");
    nam.innerHTML = parseInt(nam.innerHTML) + 1;
    setTimeout(function () {
      firstBox.classList.remove("is-flipped");
      secondBox.classList.remove("is-flipped");
    }, 1000);
  }
}
function noClick() {
  boxes.classList.add("no-click");
  setTimeout(function () {
    boxes.classList.remove("no-click");
  }, 1000);
}

document.querySelector(".game-over span").onclick = function () {
    setTimeout(() => {
        window.location.reload(true)
    },1000)
}


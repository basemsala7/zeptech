let openNav = document.getElementById("openNav");
let navMenue = document.getElementById("navMenue");
let closeIcon = document.getElementById("close");
let digital = document.getElementById("digital");
let containMenue = document.getElementById("containMenue");
let showenCon = document.querySelectorAll(".showenCon");
let arrow = document.querySelectorAll(".arrow");
let coub1 = document.getElementById("coub1");
let coub2 = document.getElementById("coub2");
let experience = document.querySelector(".experience");
let btn = document.querySelector(".toUp");
let items = document.querySelectorAll(".item");
let togel = false;

let counters = document.querySelectorAll(".counters .counter");
let section = document.querySelector(".services");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 350) {
    if (!started) {
      counters.forEach((counter) => startCount(counter));
    }
    started = true;
  }
  if (window.scrollY >= experience.offsetTop + 150) {
    for (let i = 0; i <= items.length - 1; i++) items[i].style.opacity = "1";
  }
  if (window.scrollY >= 850) {
    btn.style.display = "block";
  }
  if (window.scrollY <= 450) {
    btn.style.display = "none";
  }
};

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

function openAndClose(order) {
  togel = !togel;
  showenCon.forEach((ele, index) => {
    ele.style.display = "none";
    arrow[index].style.transform = "rotate(270deg)";

    if (index == order) {
      ele.style.display = togel ? "block" : "none";
      arrow[order].style.transform = togel ? "rotate(0deg)" : "rotate(270deg)";
    }
  });
}
openNav.onclick = () => {
  navMenue.style.transform = "translate(0)";
  closeIcon.style.display = "block";
};

closeIcon.onclick = () => {
  navMenue.style.transform = "translate(-110%)";
  closeIcon.style.display = "none";
};

window.addEventListener("load", () => {
  digital.style.transform = "translateX(-150px)";
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

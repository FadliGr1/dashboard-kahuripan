// const mode = {
//   dark: "Dark Mode",
//   light: "Light Mode",
// };

// const checkbox = document.getElementById("checkbox");

// const theme = localStorage.getItem("theme");
// document.body.classList.add(theme || null);
// checkbox.checked = theme !== "dark";

// document.getElementById("label-mode").innerText = mode[theme || "light"];

// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark");

//   const theme = localStorage.getItem("theme");
//   checkbox.checked = theme === "dark";

//   if (theme === "dark") {
//     localStorage.setItem("theme", "");
//     document.getElementById("label-mode").innerText = mode.light;
//   } else {
//     localStorage.setItem("theme", "dark");
//     document.getElementById("label-mode").innerText = mode.dark;
//   }
// });

function handleFavorite(e) {
  const btnFav = e.closest(".btn-fav");
  btnFav.classList.toggle("active");
}

function handleBuy(e) {
  const btnBuy = e.closest(".buy-product");
  btnBuy.classList.toggle("active");
}

function handleFollow(e) {
  const btnFollow = e.closest(".btn-follow");
  btnFollow.classList.toggle("active");

  if (btnFollow.classList.contains("active")) {
    btnFollow.innerText = "Following";
  } else {
    btnFollow.innerText = "+Follow";
  }
}

function handleClickMenu(e) {
  const navItem = document.querySelectorAll(".item-menu");
  navItem.forEach(function (v) {
    v.classList.remove("active");
  });
  e.closest(".item-menu").classList.add("active");
}

const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octocber", "November", "December"];

const renderCalender = () => {
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let liTag = "";

  for (let i = 1; i <= lastDateofMonth; i++) {
    liTag += `<li>${i}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalender();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon);
  });
});

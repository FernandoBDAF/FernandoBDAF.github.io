let typeMsg = null;
let typeTitle = null;
let startchangeNavText = null;
let typeNav = null;
let contactsLinks = {
  github: "https://github.com/FernandoBDAF",
  linkedin: "https://www.linkedin.com/in/fernando-barroso-62462b86/",
  email: "fernandobarrosomz@gmail.com",
  leetcode: "https://leetcode.com/FBDAF/",
};

function handleContactClick(id) {
  if (id === "email") {
    window.open("mailto:" + contactsLinks[id], "_blank");
    return;
  }
  window.open(contactsLinks[id], "_blank");
}

function showTooltip(id) {
  const tooltip = document.getElementById("tooltip");
  const icon = document.getElementById(id);
  tooltip.innerHTML = id.charAt(0).toUpperCase() + id.slice(1);
  const elementRect = icon.getBoundingClientRect();
  tooltip.style.top = elementRect.top - tooltip.offsetHeight - 5 + "px";
  tooltip.style.left =
    elementRect.left + elementRect.width / 2 - tooltip.offsetWidth / 2 + "px";
  tooltip.style.display = "block";
}

function hideTooltip() {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}

function showDescription(element) {
  element.style.display = "";
}

function hideDescription(element) {
  element.style.display = "none";
}

function changeNavText() {
  menuText = document.getElementById("menuText");
  const msg = "Hover your mouse over each project to see its description!";
  const title = "Full Stack Engineer";
  typeMsg = setTimeout(() => {
    menuText.innerHTML = "";
    typeText(0, msg, true, 25, menuText);
  }, 1000);
  typeTitle = setTimeout(() => {
    menuText.innerHTML = "";
    typeText(0, title, false, 50, menuText);
  }, 15000);
}

function typeText(i, msg, flashing, time, element) {
  if (document.visibilityState !== "visible") {
    return;
  }
  if (i < msg.length) {
    element.innerHTML += msg.charAt(i);
    i++;
    typeNav = setTimeout(() => {
      typeText(i, msg, flashing, time, element);
    }, time);
  } else {
    if (flashing) {
      let effect = setInterval(flash, 500);
      setTimeout(() => {
        clearInterval(effect);
      }, 1000);
    }
  }
}

function flash() {
  e = document.getElementById("menuTextLink");
  e.style.transform = "scale(1.2)";
  e.style.paddingLeft = "50px";
  setTimeout(() => {
    e.style.transform = "scale(1)";
    e.style.paddingLeft = "0px";
  }, 250);
}

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    console.log("visible");
    document.getElementById("menuText").innerHTML = "Full Stack Engineer";
    changeNavText();
    startchangeNavText = setInterval(changeNavText, 90000);
  } else {
    console.log("hidden");
    clearTimeout(typeMsg);
    clearTimeout(typeTitle);
    clearInterval(startchangeNavText);
    clearTimeout(typeNav);
    document.getElementById("menuText").innerHTML = "Full Stack Engineer";
  }
});

function checkWhichPage (pageName) {
	var fullPath = window.location.pathname;
	var filename = fullPath.split('/').pop();
	return filename === pageName;
}

function onStartProjects() {
	if (checkWhichPage('projects.html')) {
		changeNavText();
		startchangeNavText = setInterval(changeNavText, 90000);
	}
}

onStartProjects();
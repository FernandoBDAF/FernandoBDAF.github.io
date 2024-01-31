// function toggleSection(sectionId) {
//     const content = document.getElementById(`${sectionId}-content`);
//     content.style.display = content.style.display === 'none' ? 'flex' : "none";
//   }

let typeMsg = null;
let typeTitle = null;
let startchangeNavText = null;
let typeNav = null;


  function showDescription(element) {
	element.style.display = "";
	
  }

  function hideDescription(element) {element.style.display = "none";
  }

  function changeNavText() {
	menuText = document.getElementById("menuText");
	const msg = "Hover your mouse over each project to see its description!";
	const title = "Full Stack Engineer";
	typeMsg = setTimeout(() => {
		menuText.innerHTML = "";
		typeText(0, msg, true, 25, menuText)
	}, 1000);
	typeTitle = setTimeout(() => {
		menuText.innerHTML = "";
		typeText(0, title, false, 50, menuText)
	}, 15000);
  }

  function typeText(i, msg, flashing, time, element) {
	if (document.visibilityState !== 'visible') {
		return;
	}
	if (i < msg.length) {
		element.innerHTML += msg.charAt(i);
		i++;
		typeNav = setTimeout(() => {
			typeText(i, msg, flashing, time, element)
		}, time);
	} else {
		if (flashing) {
			let effect = setInterval(flash, 500)
			setTimeout(() => {
				clearInterval(effect);
			}, 1000);
		}
	}
}

function flash() {
	e = document.getElementById("menuTextLink")
	e.style.transform = "scale(1.2)";
	e.style.paddingLeft = "50px";
	setTimeout( () => {
		e.style.transform = "scale(1)";
		e.style.paddingLeft = "0px";
	}, 250);
}

document.addEventListener('visibilitychange', function () {
	if (document.visibilityState === 'visible') {
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

  changeNavText();
  startchangeNavText = setInterval(changeNavText, 90000);
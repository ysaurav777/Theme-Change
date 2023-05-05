let themeUserInputEl = document.getElementById("themeUserInput");
let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");

function okay(event) {
    if (event.key === "Enter") {
        if (themeUserInputEl.value === "Light") {
            headingEl.style.color = "#014d40";
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        } else if (themeUserInputEl.value === "Dark") {
            headingEl.style.color = "white";
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        } else {
            alert("Enter the vaild text");
        }
    }
}

themeUserInput.addEventListener('keydown', okay);
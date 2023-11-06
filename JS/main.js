function openNewWindow() {
  newWindow = window.open("https://www.example.com", "_blank", "width = 400px, height = 400px, left = 200px, top= 200px");
}

function closeWindow() {
  if (newWindow) {
    newWindow.close();
  }
}

function focusWindow() {
  if (newWindow) {
    newWindow.focus();
  }
}

function blurWindow() {
  if (newWindow) {
    newWindow.blur();
  }
}
// ===================================================
const bodyHeight = `height of body :${document.body.clientHeight}`;
const browserHeight = `height of browser : ${window.innerHeight}`;
const screenHeight = `height of user screen : ${window.screen.height}`;
const availableScreenHeight = `available height of user screen : ${window.screen.availHeight}`;
const bodyWidth = `width of body : ${document.body.clientWidth}`;
const browserWidth = `width of browser : ${window.innerWidth}`;
const screenWidth = `width of user screen : ${window.screen.width}`;
const availableScreenWidth = `available width of user screen : ${window.screen.availWidth}`;

function getScreenInformation() {

  console.log(bodyHeight)
  console.log(browserHeight)
  console.log(screenHeight)
  console.log(availableScreenHeight)
  console.log(bodyWidth)
  console.log(browserWidth)
  console.log(screenWidth)
  console.log(availableScreenWidth)
}
getScreenInformation()
// ===========================================
let alertShown = false;
window.addEventListener("mousemove", function (event) {
  if (event.clientY <= 5 && !alertShown) {
    this.confirm("Are you sure you want to leave this page?");
    alertShown = true;
  }
});

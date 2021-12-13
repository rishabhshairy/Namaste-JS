// * Event listeners examples
function attachListeners() {
    let count = 0;
    var el = document.getElementById("clickMe");
    if (el) {
      el.addEventListener("click", function xyz() {
        console.log("Button is clicked ", ++count);
      });
    }
  }
  
  attachListeners();

  //* Need to free up event listeners as they do not release memory and webpage could be slow due lot of listeners in the page.
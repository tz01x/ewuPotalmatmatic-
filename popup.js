// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {

//     console.log('now happed happend');
//   changeColor.style.backgroundColor = color;
// });


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    // chrome.storage.sync.get("color", ({ color }) => {
    //   document.body.style.backgroundColor = color;
    // });

    if(document.URL==='https://portal.ewubd.edu/' || document.URL==='http://portal.ewubd.edu/'){

        f=document.getElementById("lblFirstNo");
        s=document.getElementById("lblSecondNo");

        a=document.getElementById("lblcaptchaAnswer");

        a.value=parseInt(f.innerText)+parseInt(s.innerText);

    }





  }
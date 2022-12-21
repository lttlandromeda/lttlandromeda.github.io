window.addEventListener("load", () => {
  let ignoreScrollCall = false;
  const elMenu = document.querySelector(".header .navbar .menu");
  // Add .active class on buttons when scrolling (highlight it)
  // scroll -- const scroll = new LocomotiveScroll({...

  scroll.on("call", (callValue) => {
    // console.log(callValue, ignoreScrollCall);
    if (!ignoreScrollCall) {
      const elId = "#" + callValue;
      const elSection = document.querySelector(elId);
      if (elSection) {
        elMenu.querySelectorAll("li").forEach((item) => {
          item.classList.remove("active");
          const a = item.querySelector("a");
          console.log(a.getAttribute("href"));
          if (elId == a?.getAttribute("href")) {
            console.log(">>", elId, a, item);
            item.classList.add("active");
          }
        });
      }
    } else {
      // console.log("??", ignoreScrollCall);
    }
  });

  // Add .active class to the current button on click (highlight it)
  elMenu.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", function () {
      const current = elMenu.querySelector("li.active");
      current?.classList?.remove("active");
      const parent = this.parentElement;
      parent?.classList?.add("active");
      ignoreScrollCall = true;
      setTimeout(() => {
        ignoreScrollCall = false;
      }, 1000);
    });
  });
});

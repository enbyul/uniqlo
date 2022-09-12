window.addEventListener("load", () => {
  const depth1 = document.querySelectorAll(".depth1 > li");

  //nav
  depth1.forEach((item) => {
    //depth2
    item.addEventListener("mouseenter", (e) => {
      for (let i = 0; i < depth1.length; i++) {
        depth1[i].querySelector(".depth2").classList.remove("on");
      }
      item.querySelector(".depth2").classList.add("on");
    });

    //depth3
    const depth2Ele = item.querySelectorAll(".depth2_left > ul > li");
    depth2Ele.forEach((prev) => {
      prev.addEventListener("mouseenter", (e) => {
        for (let i = 0; i < depth2Ele.length; i++) {
          depth2Ele[i].classList.remove("on");
        }
        e.target.classList.add("on");
      });
    });

    //nav close
    item.querySelector(".close").addEventListener("click", () => {
      item.querySelector(".depth2").classList.remove("on");
    });
  });

  //search
  const search = document.querySelector(".search");
  const searchArti = search.querySelector("article");
  const searchContainer = search.querySelector(".search_input_container");
  const searchClose = search.querySelector(".close");
  searchArti.addEventListener("click", (e) => {
    searchContainer.classList.add("on");
  });
  searchClose.addEventListener("click", (e) => {
    searchContainer.classList.remove("on");
  });

  //login
  const login = document.querySelector(".login");
  const loginArti = login.querySelector(".login > article");
  const loginPopup = login.querySelector(".login_modal_popup");
  loginArti.addEventListener("click", () => {
    loginPopup.classList.add("on");
  });

  //회원 비회원 tab
  const loginTab = login.querySelectorAll(".login_tabs li");
  const membership = login.querySelectorAll(".membership > div");
  loginTab.forEach((item, ind) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < loginTab.length; i++) {
        loginTab[i].classList.remove("on");
        membership[i].classList.remove("on");
      }
      e.target.classList.add("on");
      membership[ind].classList.add("on");
    });
  });

  //login close
  const loginClose = login.querySelector(".close");
  loginClose.addEventListener("click", () => {
    loginPopup.classList.remove("on");
  });

  //slide
}); //window load

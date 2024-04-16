var nav = responsiveNav(".nav-collapse", {
    label: "Menu",
    insert: "before",
  });


  var toggle = document.getElementById("toogle");
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    nav.toggle();
  }, false);

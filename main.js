var dropOpen = function(event) {

  if (event.target.id === "one") {
    $("#contentOne").toggleClass("open");
    $("#contentTwo").toggleClass("close");
    $("#contentThree").toggleClass("close");
  };

  if (event.target.id === "two") {
    $("#contentOne").toggleClass("close");
    $("#contentTwo").toggleClass("open");
    $("#contentThree").toggleClass("close");
  };

  if (event.target.id === "three") {
    $("#contentOne").toggleClass("close");
    $("#contentTwo").toggleClass("close");
    $("#contentThree").toggleClass("open");
  };
};


$(".heading").click(dropOpen);

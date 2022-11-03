const menuBtn = $(".hamburger-icon");
const closeBtn = $(".close-menu-icon");

menuBtn.click(function() {
  menuBtn.hide();
  closeBtn.show();
});

closeBtn.click(function() {
  closeBtn.hide();
  menuBtn.show();
});

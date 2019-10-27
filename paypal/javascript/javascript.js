var private = document.querySelector('.nav-item-private');
var corporation = document.querySelector('.nav-item-corporation');
var menuPrivate = document.querySelector('.sub-menu-private');
var menuCorporation = document.querySelector('.sub-menu-corporation');
var headerHead = document.querySelector('.header-head');

menuPrivate.hidden = true;
menuCorporation.hidden = true;

private.onmouseover = function () {
  menuPrivate.hidden = !menuPrivate.hidden;
  headerHead.classList.add('header-blue');
};

private.onmouseout = function () {
      menuPrivate.hidden = true;
      headerHead.classList.remove('header-blue');
};

corporation.onmouseover = function () {
  menuCorporation.hidden = !menuCorporation.hidden;
  headerHead.classList.add('header-blue');
};

corporation.onmouseout = function () {
  menuCorporation.hidden = true;
  headerHead.classList.remove('header-blue');
};


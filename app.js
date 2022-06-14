function toggleMenu() {
  const menuToggle = document.querySelector('.burger');
  const menuActive = document.querySelector('.sidebar');
  const logoActive = document.querySelector('.logo');
  menuToggle.classList.toggle('active');
  menuActive.classList.toggle('active');
  logoActive.classList.toggle('active');
}
toggleMenu();
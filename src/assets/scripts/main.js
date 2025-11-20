/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();
function toggleNav(btn) {
  const nav = document.getElementById("site-nav");
  const open = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open");
}

// Expose globally for inline onclick
window.toggleNav = toggleNav;

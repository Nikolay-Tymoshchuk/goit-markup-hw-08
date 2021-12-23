// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");

//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//   });

// })();

// (() => {
 
//   const openModalBtn = document.querySelector('[data-menu-open]');

//   const closeModalBtn = document.querySelector('[data-menu-close]'); 

//   const mobileMenuRef = document.querySelector("[data-menu]");

//       openModalBtn.addEventListener('click', toggleModal);
//       closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     const expanded =
//       openModalBtn.getAttribute("aria-expanded") === "true" || false;

//       openModalBtn.classList.toggle("is-open");
//       openModalBtn.setAttribute("aria-expanded", !expanded);
    
//       closeModalBtn.getAttribute("aria-expanded") === "true" || false;

//       closeModalBtn.classList.toggle("is-open");
//       closeModalBtn.setAttribute("aria-expanded", !expanded);

//       mobileMenuRef.classList.toggle("is-open");
//   }

// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.menu.classList.toggle('is-open');
  }
})();




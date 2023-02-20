// ------------------------------------------------------ //
// basic
// ------------------------------------------------------ //

// 變數
const h1 = document.querySelector(".heading-primary");

// 改變內容
// h1.textContent = "hahahah";

// 監聽事件
h1.addEventListener("click", (e) => {
  console.log(e);
  console.log(h1);
  //   alert("test test 123");
});

const years = document.querySelector(".years");
const currentYear = new Date().getFullYear();
years.textContent = currentYear;

// ------------------------------------------------------ //
// 教學內容
// ------------------------------------------------------ //

const menuIcon = document.querySelector(".btn-mobil-nav");
const header = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const link = document.querySelector(".main-nav-list");

link.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Sticky navigation
const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);

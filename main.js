const toggleBtn = document.getElementById("toggleBtn");
const category = document.getElementById("realCategory");

toggleBtn.addEventListener("click", ()=>{
    category.classList.toggle("active");
})
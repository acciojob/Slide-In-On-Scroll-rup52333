// Your JS code here.
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const sliderImages=document.querySelectorAll(".slide-in");


function checkSlide(e) {
sliderImages.forEach(sliderImage=>{
const slideInAt=(window.scrollY+window.innerHeight)-sliderImage.height/2;
const imageBotton=slideImage.offsetTop+sliderImage.height;
const isHalfShown=slideInAt>slideImage.offsetTop;
const isNotScrolledPast=window.scrollY<imageBotton;
if(isHalfShown && isNotScrolledPast){
slideImage.classList.add("active");
		

	}
else{
slideImage.classList.remove("active");
	
}
	
})

	
}
window.addEventListener("scroll",debounce(checkSlide));



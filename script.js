// Your JS code here.
const sliderImages=document.querySelectorAll(".slide-in");


function checkSlide(e) {
sliderImages.forEach(slideImage=>{
const slideInAt=(window.scrollY+window.innerHeight)-slideImage.height/2;
const imageBotton=slideImage.offsetTop+slideImage.height;
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

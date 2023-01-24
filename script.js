// Your JS code here.
const sliderImages=document.querySelectorAll(".slide-in");


function checkSlide(e) {
	console.count(e);
sliderImages.forEach(slideImage=>{
const slideInAt=(window.scrollY+window.innerHeight)-slideImage.height/2;
const imageBotton=sliderImage.offsetTop+slideImage.height;
	const in HalfShown=slideInAt>sliderImage.offsetTop;
	const isNotScrolledFast=window.scrollY<imageBotton;
	if(isHalfShown && isNotScrolledPast){
slideImage.classList.add("active");
		

		
	}
else{
slideImage.classList.remove("active");
	
}
	
})

	
}
window.addEventListener("scroll",debounce(checkSlide));

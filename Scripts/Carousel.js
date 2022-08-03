const TO_SECOND = 1000;

const ATTR_SLIDE_INDEX = "SlideIndex";
const ATTR_MAX_SLIDE = "MaxSlide";
const ATTR_TIME_TO_SWITCH = "TimeToSwitch";

const CLASS_CAROUSEL = ".Carousel";
const CLASS_CAROUSEL_SWITCHER = ".CarouselSwitcher";
const CLASS_MY_SLIDES = ".MySlide";
const CLASS_ACTIVE = "Active"

const ID ="id";
const UNDEFINED = "undefined";
const SPACE = " ";

const CSS_DISPLAY = "display";
const CSS_NONE = "none";
const CSS_BLOCK= "block";

//Contain Timeouts for each carousel
var allTimeouts = {};

$(CLASS_CAROUSEL.concat(SPACE,CLASS_CAROUSEL_SWITCHER)).click(ShowSelectedSlide);
$(CLASS_CAROUSEL).each(ShowFirstSlideInCarousel);

//Show slide with user action
function ShowSelectedSlide() 
{
	var lCarousel = $(this).closest(CLASS_CAROUSEL);
	
	if(lCarousel !== null)
	{
		lCarousel.attr(ATTR_SLIDE_INDEX, $(this).attr(ATTR_SLIDE_INDEX));
		DisplaySlideInCarousel(lCarousel);
	}
}

//Show a slide automatically
function AutoDisplaySlides(pCarousel)
{
	pCarousel.attr(ATTR_SLIDE_INDEX,parseInt(pCarousel.attr(ATTR_SLIDE_INDEX)) + 1);
	DisplaySlideInCarousel(pCarousel);
}

//Show the first slide in the carousel
function ShowFirstSlideInCarousel()
{
	$(this).attr(ATTR_SLIDE_INDEX,1);
	DisplaySlideInCarousel($(this));
}

//Show a slide in the Carousel
function DisplaySlideInCarousel(pCarousel)
{
	//Get the slide index of the carousel
	lSlideIndex = parseInt(pCarousel.attr(ATTR_SLIDE_INDEX));
	
	//Clear the timeout for avoid it change the slide to soon
	var lTimeout = allTimeouts[pCarousel.attr(ID)];
	if(lTimeout !== null)
	{
		clearTimeout(lTimeout);
	}
	
  var i;

  if (lSlideIndex > pCarousel.attr(ATTR_MAX_SLIDE)) 
  {
	  lSlideIndex = 1
  }
  else if (lSlideIndex < 1) 
  {
	  lSlideIndex = slides.length;
  }

  pCarousel.attr(ATTR_SLIDE_INDEX, lSlideIndex);
  pCarousel.find(CLASS_MY_SLIDES).each(function(){DisplaySlide($(this),lSlideIndex);});
  pCarousel.find(CLASS_CAROUSEL_SWITCHER).each(function(){ActiveDot($(this), lSlideIndex);});
  
  //Set the timeout if the Carousel has one
  var lTimeToSwitchAttr = pCarousel.attr(ATTR_TIME_TO_SWITCH);
  
  if(typeof lTimeToSwitchAttr !== UNDEFINED && lTimeToSwitchAttr !== false)
  {
	  allTimeouts[pCarousel.attr(ID)] =  setTimeout(function(){AutoDisplaySlides(pCarousel);}, TO_SECOND * parseInt(lTimeToSwitchAttr));
  }
  
}

//Display block or none the slides
function DisplaySlide($pSlide, pSlideIndex)
{
	if(parseInt($pSlide.attr(ATTR_SLIDE_INDEX)) === pSlideIndex && $pSlide.css(CSS_DISPLAY) === CSS_NONE)
	{
		$pSlide.css(CSS_DISPLAY, CSS_BLOCK);
	}
	else if(parseInt($pSlide.attr(ATTR_SLIDE_INDEX)) !== pSlideIndex && $pSlide.css(CSS_DISPLAY) === CSS_BLOCK)
	{
		$pSlide.css(CSS_DISPLAY, CSS_NONE);
	}
}

//Active the dot for know which one is selected
function ActiveDot($pDot, pSlideIndex)
{
	if(parseInt($pDot.attr(ATTR_SLIDE_INDEX)) === pSlideIndex && !$pDot.hasClass(CLASS_ACTIVE))
	{
		$pDot.addClass(CLASS_ACTIVE);
	}
	else if(parseInt($pDot.attr(ATTR_SLIDE_INDEX)) !== pSlideIndex && $pDot.hasClass(CLASS_ACTIVE))
	{
		$pDot.removeClass(CLASS_ACTIVE);
	}
}
# Carousel_js
Carousel which show slides with a timer or user's click.

<hr>

For use it create a Div which has the class **.Carousel** and an unic ID

```html 
<div class="Carousel" id="MyCarousel"></div>
```

add also the attribute **MaxSlide** it will define the number max of slides your carousel can show, if you add 3 slides but set the property maxslide to 2 then the carousel will just show two slides.

```html 
<div class="Carousel" id="MyCarousel" MaxSlide="3"></div>
```

You can also add the optional attribute **TimeToSwitch**, it will define the time in second for show the next slide.

*If the current slide show is the last slide it will show the first one at the end of the timer.*
*If you don't use the attribute maxslide the carousel will work but without timer*

```html 
<!-- Switch slides every five seconds -->
<div class="Carousel" id="MyCarousel" TimeToSwitch="5"  MaxSlide="3"></div>
```

Into that div you will need to define a div which has the class **.SlidesContainer**, this one will contain all the slides of your Carousel.

```html 
<div class="Carousel" id="MyCarousel" TimeToSwitch="5" MaxSlide="3">
	<div class="SlidesContainer"></div>
</div>
```

Into the container you can define all the slides you want, for that you have to create a div with the class **.MySlide** it has to have an attribute **SlideIndex** which define the position of your slide.

*SlideIndex only contain number which you have to start by 1 and count the number one by one (1,2,3... not 1,3,60...)*

Into that div you can add everything you want show in your Slide for example a simple image (the css is made for this example you will have to rewrite it if you want to show something else)

```html 
<div class="Carousel" id="MyCarousel" TimeToSwitch="5" MaxSlide="3">
	<div class="SlidesContainer">
		<div SlideIndex="1" class="MySlide">
		  <img src="./Images/Image_1.png">
		</div>
		<div SlideIndex="2" class="MySlide">
		  <img src="./Images/Image_2.png">
		</div>
		<div SlideIndex="3" class="MySlide">
		  <img src="./Images/Image_3.png">
		</div>
	</div>
</div>
```

*As you can see I have three slides so MaxSlide value is 3*
*You can add the class **.Fade** to the **.MySlide** div it will add a fade effect when slides are swiched*

You can optionaly add buttons for select a specific slide, for that in the div **.Carousel** add an element which contain the class **.CarouselSwitcher** and an attribute SlideIndex corresponding to slide this element select.

```html 
<div class="Carousel" id="MyCarousel" TimeToSwitch="5" MaxSlide="3">
	<div class="SlidesContainer">
		<div SlideIndex="1" class="MySlide Fade">
		  <img src="./Images/Image_1.png">
		</div>
		<div SlideIndex="2" class="MySlide Fade">
		  <img src="./Images/Image_2.png">
		</div>
		<div SlideIndex="3" class="MySlide Fade">
		  <img src="./Images/Image_3.png">
		</div>
	</div>
	<center><div>
	  <span SlideIndex="1" class="CarouselSwitcher"></span> 
	  <span SlideIndex="2" class="CarouselSwitcher"></span> 
	  <span SlideIndex="3" class="CarouselSwitcher"></span> 
	</div></center>
</div>
```

*The CSS stilyse the span*
*If you have a timer it will be reset by a slide selection, for example if you a timer set to 5 seconds and it already counted 4 seconds when you click on the switcher then the timer restart to 0 for counting 5 seconds*
<hr>

*<sub>Made with jquery-3.6.0, the script can't work without jquery</sub>*

<hr>

This repository contains the js script, a css specific to the Carousel and an example which show three type of carousel

Enjoy :)

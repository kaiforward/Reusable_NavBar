# REUSABLE NAVIGATION BAR

### Description

A simple navigation bar with a responsive design for any device. made using flexbox, Jquery and some Font Awesome icons!

It adds Simple colors and very little styling which can and should be added seperately.

Css/js file's easily editable, use it any way you wish!

### Structure

The Html structure that should be used is this, which can be found in the html file navbar.html

<div id="navbar" class="CC">
	<div id="navblock">
		<h1 id="navtitle" class="CC">Earthworks</h1>
		<div class="navbutton CClink">
			<i class=" fa fa-bars" aria-hidden="true"></i>
		</div>
	</div>
	<div class="abslink">
		<div id="linkbar" class="CC mobilehidden">
			  <a href="" class="link CClink">Home</a>
			  <a href="" class="link CClink">About</a>
			  <a href="" class="link CClink">Products</a>
			  <a href="" class="link CClink">Login/Register</a>
		</div>
	</div>
</div>

or 

navbar |--> navblock|--> navtitle
	   |            |
	   |			|--> navbutton|--> (any icon)
	   |	
       |--> abslink  --> linkbar  |--> link
								  |--> link
								  |--> link
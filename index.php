<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Get Your Game On!</title>
<link type="text/css" rel="stylesheet" href="style.css" />
<script src="jquery-2.1.3.js"></script>
<script type="text/javascript" src="scripts.js"></script>

</head>

<body>
<!-- Main content wrapper -->
<div id="wrapper">

	<header id="header">
		<div id="logo">
                    <img src="images/gameheader.jpg" title="Main Page Logo" alt="Main Page Logo" width="900px" />
		</div>
	</header>

		
	
	<div id="spacer">
	</div>


<!-- left section -->
	<section id="left">
            <div id="reviews">
                <h2 class="title">Game Reviews</h2>
                
                <p id="info">
                </p>
                <div id="result">
                    <table id="reviewTable" style="width:100%">
                        <tbody>
                            <tr>
                                <th>Game Name</th>
                                <th>Rating</th>
                                <th>Review</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div id="addReviewForm">
                <h2 class="title">Add Review</h2>
                
                    <form name="addReview">
                    <p id="gameNameLabel">
                    Game Name <br />
                    <input type="text" id="gameName"/> <span id="gameName_Error"> </span>
                    </p>

                    <p id="gameRatingLabel">
                        Game Rating (1-10) <br />
                    <input type="text" id="gameRating"/> <span id="gameRating_Error"> </span> <span id="gameRating_regexError"> </span>
                    </p>

                     <p id="gameReviewLabel">
                        Review <br />
                    <input type="text" id="gameReview"/> <span id="gameReview_Error"> </span> <span id="gameReview_regexError"> </span>
                    </p>

                    <!-- "clickME" calls a .click function to check form contents, update styling for error messages, and update stored info-->
                    <input type="button" value="submit" id="clickMe"/>
                    </form>
                
            </div>
            
            <span id="confirmation"></span>
            
            <br><br>
            
            <div id='gobackbutton'><input type="button" value="Go Back" id="reloadMe"/><br></div>
                    
            <div id="aboutUs">
                <h2 class="title">About Us</h2>
                <p>
                    Welcome to Get Your Game On!
                </p><p>    
                    We're your one stop shop for saving your personal feelings about your video game experiences.
                </p><p>
                     Never forget how much you loved or hated a game ever again!
                </p><p>
                    Future updates will maybe someday include things like user logins, game screenshots, opening your reviews for other users to view and comment, and perhaps pizza delivery!
                </p><p>
                    Keep coming back for more, you never know what you'll find!
                </p>
            </div>

            <div id="contactUs">
                <h2 class="title">Contact Us</h2>
                <p>
                    How to contact us:
                </p><p>
                    Step 1: Walk to your window, open it, and stick your head out as far as you can (we're not responsible if you fall out or hurt yourself).
                </p><p>   
                    Step2: Shout your question, comment or concern as loud as you can.
                 </p><p>    
                    We basically guarantee we'll get back to you faster than Steam Customer Service, and with more helpfulness than Microsoft.
                </p>
            </div>
            

	</section><!--/#left -->

<!-- right sidebar -->
	<aside id="right">
		<header id="sidebar"><h3 class="feature-title">Check It Out!</h3></header>
		<p>
		<a href="javascript:void[0];" id="readReviews">Read Reviews</a></br>
		<a href="javascript:void[0];" id="readAbout">About</a></br>
		<a href="javascript:void[0];" id="readContact">Contact Us</a></br>
                <a href="javascript:void[0];" id="readAdd">Add A Review</a></br>
		</p>
	</aside>

<!-- footer -->
	<footer id="footer">
	<p>Shaun Hazard   -    SE251    -   Final Project</p>
	</footer><!--/#footer -->

</div><!--/#wrapper -->

</body>
</html>

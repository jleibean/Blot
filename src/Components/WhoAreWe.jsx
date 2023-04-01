import React from "react";

function WhoAreWe() {
    return (
        <section id="whoWeAre">
			<h2>Who We Are:</h2>
			<p>We are art enthusiast who wanted to create a safe place to buy and sell art for the Baltimore community. 
			<br/>We aim to connect artists and enthusiasts alike, share insipration, techniques, thoughts, laughs, and life!  
			<br/>We are a community.
			</p>
			<br/>
			<br/>
			<center><button class="btn btn-rounded secondaryBtn" onclick="loadPage()">Meet the Team</button></center>
			{/* <script language="javascript" type="text/javascript">
					function loadPage() 
					{
					    window.location.href = "file:///G:/Home%20drive/www/Dreamweaver/Art/AboutContact.html#aboutUs";
					}
			</script> */}
		</section>
    );
}


export default WhoAreWe;
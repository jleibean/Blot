import React from "react";
import feature1 from "../images/featured1.jpg";
import feature2 from "../images/featured2.jpg";
import feature3 from "../images/featured3.jpg";

function Feature() {
  return (
    <section id="featured">
    {/* Start of CAROUSEL */}
        <div id="carousel">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              {/* Wrapper for slides */}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <center>
                    <img src={feature1} alt="featured painting 1" height="450px" />
                  </center>
                  <div class="carousel-caption">
                    <h4>Night at the Park</h4>
                    <h5> Oil on Canvas</h5>
                  </div>
                </div>

                <div class="carousel-item">
                  <center>
                    <img src={feature2} alt="featured painting 2" height="450px" />
                  </center>
                  <div class="carousel-caption">
                    <h4>Riverside</h4>
                    <h5> Oil on canvas </h5>
                  </div>
                </div>

                <div class="carousel-item">
                  <center>
                    <img src={feature3} alt="featured painting 3" height="450px" />
                  </center>
                  <div class="carousel-caption">
                    <h4>Downtown</h4>
                    <h5> Oil on wood </h5>
                  </div>
                </div>
              </div>

              {/* Left and right controls */}
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
        </div>
        {/* <!-- END OF CAROUSEL -->  */}
        <div id="featuredinfo">
          <h3 class="shadow"> Our Featured Artist this week is:</h3>
          <h2>John Jones</h2>
          <br />
          <p>
            John Jones is an artist living in Baltimore, Md.
            He has had a passion for art since he was a yound child.
            He excelled in his art classes throughout school and pursued an
            education at Maryland Institute College of Art.
          </p>
          <center>
            <button class="customBtn btn btn-lg" onclick="loadArtist()">
              Check out their work
            </button>
          </center>
        </div>
    </section>
  );
}

export default Feature;
import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="artists.html">Artists</a>
          </li>
          <li>
            <a href="construction.html">Community</a>
          </li>
          <li>
            <a href="blog.html">Creative Tips</a>
          </li>
          <li>
            <a href="construction.html">My Account</a>
          </li>
          <li>
            <a href="AboutContact.html#aboutUs">About Us</a>
          </li>
          <li>
            <a href="faq.html">FAQ</a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

import React from 'react';

function Navbar() {
    return(
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark justify-content-center">
        <div class="brand mr-auto">
            Brand
        </div>
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Signin</a>
            </li>
        </ul>
    </nav>
    )
}
export default Navbar;
import React from 'react'
import '../css/ex.css'
function Example() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Drinks</a>
            <ul>
              <li><a href="#">Beer</a></li>
              <li><a href="#">Wine</a></li>
              <li><a href="#">Cocktails</a></li>
            </ul>
          </li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Example

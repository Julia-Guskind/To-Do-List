import React from 'react';
import { Link } from 'gatsby'

const Card= ({ title, name, month, category }) => {
  
  let display = title
  
  if (month) {
    display = name
    category = "Math"
  }
  else {
    category = "Science"
  }

  let imagePath = require(`../images/${category}.svg`)
  //let imagePath = require("../images/health.svg")
  console.log(imagePath)
  return (
    <Link to={`${title}`} style={{
        textDecoration: "none",
    }}>
        <div class="card">
            <img
                src= {imagePath}
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h4 class="card-title" style={{
                    alignContent: "center",
                }}>{display}</h4>
                <p class="card-text">
                
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
            </div>
        </div>
    </Link>
    )
}

export default Card;
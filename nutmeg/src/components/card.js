import React from 'react';
import { Link } from 'gatsby'

const Card= ({ title, name, month }) => {
  
  let display = title
  
  if (month) {
    display = name
  }

  return (
    <Link to={`${title}`} style={{
        textDecoration: "none",
    }}>
        <div class="card">
            <img
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
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
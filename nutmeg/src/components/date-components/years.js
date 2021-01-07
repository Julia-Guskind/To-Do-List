import React from "react"
import { Nav, Navbar, NavDropdown, FormControl, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, graphql } from "gatsby"



export default function Years() {

    return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card">
                <img
                    src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">2020</h5>
                    <p class="card-text">
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </p>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card" id="2021">
                <div class="card-body">
                    <Link to="#">
                    <h2 class="card-title">2021</h2>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
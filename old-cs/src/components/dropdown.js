import React from "react"
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, graphql } from "gatsby"

export default function ArchiveDropdown({ year, title }) {

   return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
   )
}
import React from "react"

let date = new Date();
let today = (date.getMonth() + 1) + '/' + date.getDate() + "/" + date.getFullYear();

export default function Today() {
    return <h3>{today}</h3>
 }
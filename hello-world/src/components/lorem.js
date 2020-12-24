import React from "react"

export default function Lorem(props) {
   let numParagraphs = props.num;
   let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
   let newText = str.repeat(numParagraphs).split('\n').map(str => <p>{str}</p>); // repeats our text, splits into array at \n, and maps each string to its own HTML paragraph element
   return newText
}
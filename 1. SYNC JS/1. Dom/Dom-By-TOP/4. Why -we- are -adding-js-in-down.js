// => We have required to add script tag after complition of all HTML, 
//    beacause of , if we are using script at top then javascript is run 
//    primarily and after html is run. So then resolve this problem we have required to 
//    use javascript end of the page.

// OR using javascript as a external file in our page with head tag.

// example:- 

{/* <head>
  <script src="js-file.js" defer></script>
</head> */}


// OR if you forcefully want to use js inside then used "differ" keyword inside script tag.

// # What is the work of defer keyword ?
// => the differ keywords tells , html is not waiting to anything and render dom . After that javascript will be rendered.
// JavaScript program to print (Print Page) the current window contents.


// HTML code
<body>
<p></p>
<p>Click the button to print the current page.</p>
<button onclick="print_current_page()">Print this page</button>
</body>


// Js code

function print_current_page() {
    // initiate the printing of the current page
    window.print();
} 

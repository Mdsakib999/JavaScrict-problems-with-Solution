// Write a Code that changes the background color of an element when a mouse enters it using JS.


 <!DOCTYPE html>
<html>
<head>
  <style>
    .my-element {
      width: 200px;
      height: 200px;
      background-color: red;
    }
  </style>
</head>
<body>
  
<div id="myDiv" class="my-element"></div>


   <script>
    function changeBackgroundColor(elementId, color) {
      const element = document.getElementById(elementId);
      if (element) {
        element.addEventListener('mouseenter', () => {
          element.style.backgroundColor = color;
        });
      }
    }

   
  </script>
</body>
</html>


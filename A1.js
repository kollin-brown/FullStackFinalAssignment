export default function Assignment1(){
    return (
    
    <body>
  
      <div id="main" class="main ui">
        <h1 class="ui dividing centered header">In Class Assignment 1</h1>
        <b>
          This assignment is to practice skills outline in Chapter 1. Mainly:
        </b>
        <div class="ui bulleted list">
          <p class='item'>
            HTML and styling practice
          </p>
          <p class='item'>
            a parent component that renders a list of items
          </p>
          <p class='item'>
            a parent component that can pass data to a child via props
          </p>
          <p class='item'>
            a child component that can emit an event to its parent thru a function
          </p>
          
        </div>
      <div id="content"></div>
    </div>
    <script
      type="text/babel"
      data-plugins="transform-class-properties"
      src="./js/app.js"
    ></script>

  </body>
    );
} 


// Changing Themes Using Toggle Switch

let toggle = $(".toggle-switch");
let cssFile = $("link[href='theme1.css']");
let toggleState = 0;
toggle.click(()=>{
if(toggleState === 0)
{
    cssFile.attr('href','theme2.css');
    toggle.css('left','25px');
  toggleState = 1;
}
else if(toggleState === 1)
{
    cssFile.attr('href','theme3.css');
    toggle.css('left','46px');
    toggleState = 2;
}
else if(toggleState === 2)
{
    cssFile.attr('href','theme1.css');
    toggle.css('left','3.5px');
    toggleState = 0;
}
})

// Calculator Logic

// Getting the Screen and Calculator buttons
let screen = $('#screen');
let buttons = $('button');
let screenValue="";

    buttons.click((e)=>{
        // Getting the text of the buttons pressed
        buttonText = e.target.innerText;
        // If the button text is 'X' converting it to '*'
        if(buttonText === 'X')
        {
            buttonText="*";
            // Setting the "screen Value string" which is empty to button text 
            screenValue += buttonText;
            // Setting the value of the actual string to the "Screen value string"
            screen.val(screenValue);
        }
        // Evaluation of the string which is present in the current point of time
        else if(buttonText === '=')
        {
            screen.val(eval(screenValue));
        }
        // Reset the value of screen to blank by setting the "Screen value string " to empty string
        else if(buttonText === 'RESET')
        {
            screenValue = '';
            screen.val(screenValue);
        }
        // Getting a backspace in the screen
        else if(buttonText === 'DEL')
        {
            // Slicing the string by 1 space from the end
            screenValue = screenValue.slice(0,-1)
            screen.val(screenValue);
        }
        else{
            // Any other buttons Text
            screenValue += buttonText;
            screen.val(screenValue);
        }
        
    })

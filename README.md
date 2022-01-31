# Expand your mind

Expand your mind is a website that challenges your knowledge of the great beyond! Through the use of Javascript, you will be able to test what you know of space in a multiple questions manner. The quiz is for all ages to enjoy. Hopefully at the end of the quiz you will have challenged yourself and maybe even have learned something. Your score will be registered and put on the scoreboard at the end of the quiz if you reached the top 10. You will be able to see if you are the king or queen of this quiz! 

![image to show responsive design of the website](assets/images/mockup-EYM.png)

## Features
<hr>
<strong>Navigation Bar</strong>
<ul>
    <li>The navigation is featured on all three pages and are shown on the left side.</li>
    <li>The navigation links are: Home and Highscore. They both link to their respective pages</li>
    <li>The links are shown in white and when hovered over a white line will apear underneath them. The white color and line make the navigation links easy to find behind the dark background.</li> 
</ul>

![image of the navigation bar](assets/images/assets/images/nav-bar-EYM.png)

<strong>Title and intro text</strong>
<ul>
    <li>The title and intro text are only shown on the home page. They are in the middle of the screen.</li>
    <li>The title shows the name of the website.
    <li>The intro text contains a welcome to the user and a small introduction of what will happen further on.</li>
    <li>Both the title and the intro text are shown in white with the intro text being a different and smaller font than the title.</li>
</ul>

![image of title and intro text](assets/images/title-introtext-EYM.png)

<strong>Start and highscore button</strong>
<ul>
    <li>The start and highscore button are displayed underneath the intro text.</li>
    <li>Both buttons have a grey color with a black lining and a oval like shape. The colors of these buttons make them pop out of the background.</li>
    <li>The start button pops up a modal that explains further instructions to the game.</li>
    <li>The highscore button links to the highscore page.</li>
</ul>

![image of start and highscore button](assets/images/start-highscore-EYM.png)

<strong>The instructions modal</strong>
<ul>
    <li>The instructions modal pops up after the start button has been clicked and is centered in the middle of the screen.</li>
    <li>The modal shows game related instructions and a button to move to the next modal.<li>
    <li>The modal has a blue color, white text and a button the same as the start button</li>
</ul>

![image of instructions modal](assets/images/instructions-EYM.png)

<strong>The enter your name modal</strong>
<ul>
    <li>Just like the instructions modal, the enter name modal is also centered in the middle and pops up after the next button<li>
    <li>The modal shows a input field, a enter name heading and a button</li>
    <li>the heading is white and the button looks the same as the other ones</li>
    <li>The name that is put into the input field will be shown on the next page in a div</li>
    <li>After pressing the start button in the enter name modal, you will begin the quiz</li>
</ul>

![image of enter name modal](assets/images/enter-name-EYM.png)

<strong>The gamername and question counter</strong>
<ul>
    <li>The gamername is a box that show the name that was put in the input field</li>
    <li>The gamername is shown on the left side of the screen and the question counter on the right side.</li>
    <li>The question counter is a box that shows the current question you are on</li>
    <li>Both boxes have the same styling as the buttons from the previous page<li>
</ul>

![image of gamername and counter](assets/images/gamername-counter-EYM.png)

<strong>The question and options boxes</strong>
<ul>
    <li>The question box shows a random question related to space and are centered in the middle.</li>
    <li>Its styling is the same as the buttons but bigger and uses a different font than the options.</li>
    <li>The options boxes show three options to choose from. One is the right answer. These are also centered in the middle.</li>
    <li>The styling of the options boxes is the same as the question box but slightly smaller</li>
</ul>

![image of questions and options](assets/images/question-options-EYM.png)

<strong>The highscore heading</strong>
<ul>
    <li>The highscore heading is styled the same as the boxes from the game page and show the text:"Highscore".</li>
    <li>The size of the text is big and uses the same font as the question box. It is also centered in the middle.</li>
</ul>

![image of highscore heading](assets/images/highscore-heading-EYM.png)

<strong>The highscore</strong>
<ul>
    <li>The highscore consists of 10 boxes with all of them having the same style as the highscore heading</li>
    <li>Theses boxes are all centered in the middle. They are smaller than the heading.</li>
    <li>Each boxes contains a rank on the left side, the name of the user in the middle and the correct amount of answers.</li>
</ul>

![image of highscore](assets/images/highscore-EYM.png)

## Testing
<hr>
<ul>
    <li>I have confirmed that the project is responsive, looks good and that it functions on all standard screen sizes using the dev tools toolbar</li>
    <li>I have confirmed that all text on the website is easy to understand and readable.In some cases, text at the gamername and question will pop a bit out its container</li>
    <li>I have confirmed that the input field for gamername works and that the questions generate randomly and will not repeat twice.</li>
    <li>I have confirmed that the gamernames will show on the highscore if they reach the top 10 but if you get all questions right, your name doesnt show in the highscore.</li>
    <li> I have confirmed that all images load in properly.</li>
    <li> The browser is used to test the site were: Chrome, Firefox and Edge. All work accordingly.</li>
</ul>

<strong>Bugs</strong>
<ul>
    <li> No bugs were found during any phase of this project</li> 
</ul>

<strong>Validator Testing</strong>

HTML - No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/)

CSS - No errors were returned when passing through the official [(jigsaw) Validator](https://jigsaw.w3.org/css-validator/)

Javascript - No errors were returned when passing the official [(Javascript) Validator](https://jshint.com/)

Accessability - I used lighthouse to check if the accesibility is correct.

![image of lighthouse tool](assets/images/lighthouse-EYM.png)

<strong>Unfixed Bugs</strong>
<ul>
    <li> No unfixed bugs</li>
</ul>

## Deployment
<hr>
The site has been deployed to GitHub pages. The steps taken to deploy are as follows:
<ul>
    <li> In the GitHub repository, press the settings tab.
    <li>Select the master branch from the drop-down menu of the the source section.
    <li>Once the master branch is selected, the page will refresh in a few seconds. A ribbon display will confirm a succesful deployment.
</ul>

 The link to the live version of the site can be found here - https://timras.github.io/world-wide-wisdom/

  ## Credits
<hr>
<strong>Content</strong>

Questions: I've got the answer to my question from wikipedia [Wikipedia](https://www.wikipedia.org/) I've thought of the questions myself.

<strong>Media</strong>

Background images: I used [Unsplash](https://unsplash.com/) for the background images of all three pages.

Compressing images: I used [Tinypng](https://tinypng.com/) to compress all the images.

HTML formatter: I used [HTML formatter](https://webformatter.com/html) to format my html.

Google fonts: I used [Google fonts](https://fonts.google.com/) for the fonts of my website.

Mockup Generator: I used [Techsini](http://techsini.com/multi-mockup/index.php) for the mockup of my website.

## Notes

Orginally I wanted to make a quiz about the world. This is why my website is called "world-wide-wisdom". But after working on my project for some time I wanted to revolve it around space only i couldnt change my url anymore to something more fitting. This is why the url of my website can be a bit confusing. The url is not the name of the website.






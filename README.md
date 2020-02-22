# Design Studio 3 | Assignment 3

This program can be run by running appSSL.js to operate the server, players can reach the game at https://localhost:8080/mazeViewer and https://localhost:8080/mazeRunner respectively.
## Program Overview
This program is designed to be a cooperative maze navigation game. Two players simultaneously play the game together to reach the end of the maze. The first player is in a three-dimensional environment where they have to navigate through the maze with limited visibility. The other player has a top-down two-dimensional view, with 4 buttons to the right of the maze which allows them to tell the other player where to go next. The player in the maze can see these directions by looking down to see the text which will move and rotate as they do. 

## Program Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/J4IpcsLgQJw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Development Challenges
Initially, this program was designed to have the maze runner player be in virtual reality using an HMD such as an Oculus Rift or an HTC Vive, however, though the development there were problems with the teleportation pads and the raycasting that came with a-frame's hand-controls component. This problem came in the form of not being able to restrict the raycaster from going through walls, which allowed the player to just aim anywhere they want in the maze and go through walls. Further, I was unable to make it so the player would only move one spot when they press the button to teleport with VR controls. As a result, this feature of the game needed to be cut and I had to revert to a desktop and mobile experience. Another shortcoming of the development of this program was in the competitive side of the game, I attempted to get a stopwatch working which would then update a local file containing high scores, however, I was unable to get the counting of time completed successfully while incorporating an appropriate start time for the stopwatch.

## Development Successes
While the main feature of the game needed to be cut, there were areas of the development of this program which I feel went well. The main success being in the generation of the teleportation pads, as there are over 300 teleportation pads needed for this maze with each entity taking up around 7 lines of code that would mean there would be over 2,100 lines of HTML code dedicated to teleportation pads alone. As such, I implemented some features to get around this problem, the first of which was the use of mixins. Mixins allowed me to set default elements for each of the pads. But to build on that, I used JavaScript to automatically generate all of the pads off of an array of positions. With each position, the program will create a pad at that location. 


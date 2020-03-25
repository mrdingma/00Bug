## bugtracker

An project management/ ticket tracking<a href="https://bugtracker0.herokuapp.com"> application</a>.


## Table of Contents

1. [Features](#features)
1. [Additional Info](#additional-info)
1. [Technologies Used](#technologies-used)

## Features
**Authentication**
- Utilized Auth0 for user authentication and verification. 
<img src="https://media.giphy.com/media/Su1CYYXn1gRa3tRONG/giphy.gif">

**Ticket Display**
- Main dashboard page displays all tickets regardless of which project they are apart of. Sorting enabled by due date
<img src="https://media.giphy.com/media/MdSQ09hLpfey5Z8yyr/giphy.gif">

- Tickets can also be viewed on a per project basis, and drilled down individually.
<img src="https://media.giphy.com/media/d9B9N9ab4ujZ2fTp0P/giphy.gif">

**Friends system**
- adding users allows you to easily assign tickets via autocomplete dropdown during ticket creation
<img src="https://media.giphy.com/media/RfAfpphPiE2P52xp6L/giphy.gif">

**Ticket Creation**
- accessible via the main dashboard or once a individual project is selected.
- image attachment functionality
<img src="https://media.giphy.com/media/frGd7RLUkjah5KKaxo/giphy.gif">

**Comment Creation**
- text/images can be added to any individual ticket via comments
<img src="https://media.giphy.com/media/VEsOSj0n13HhZ8AlFA/giphy.gif">

**Update Notification**
- ticket creation, adding users, adding projects, and updating tickets will trigger a newsfeed like update to be generated and sent to all relevant parties
<img src="https://media.giphy.com/media/YPtDdIV0NhkB2V2fxW/giphy.gif">


**Dynamic status page by project**
- each project has a status page along with updates specific to that particular project
<img src="https://i.imgur.com/dJU33Tz.png">


**User specific content**
- Content (projects, issues, updates) will only display if they are relevant for you (ie have been assigned or of your own creation)


## Additional Info

This was a two week solo project meant to demonstrate the creation of a full stack application.

## Technologies used:
Styling: materialize-css, boostrap, react-materialize
Database: mongoose/mongodb, docker, AWS
React, react hooks, Express
Deployment: Heroku


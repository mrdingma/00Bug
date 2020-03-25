## bugtracker

An project management/ ticket tracking<a href="https://bugtracker0.herokuapp.com"> application</a>.


## Table of Contents

1. [Features](#features)
1. [Additional Info](#additional-info)
1. [Setup](#setup)

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
- ticket creation can be accessed via the main dashboard or once a individual project is selected.







**Update Notification to all assigned parties**



**Dynamic status page by project**



**User specific content**
- Content (projects, issues, updates) will only display if they are relevant for you (ie have been assigned or of your own creation)



## Additional Info

This was a 2 day project with the goal of familiarizing myself more with charting technologies/ libraries. Technologies implemented in this project are React, D3, react-chartjs-2 (React wrapper for Chart.js).

Unfortunately Coindesk API data updates every minute (instead of ideally every few seconds...allowing for price ticker to animate more regularly). Second challenge was the API only provided end of day closing prices for historical dates, so in order for me to build out a "Live" view (which represented prices for the last hour) and "1Day" view (24 hour period), I needed to set up a separate server that would query the API every minute and then save the responses into a database (I utilized mongodb for this). I would then query my own API for the aforementioned views.


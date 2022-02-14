# BankRoll
## An intuitive stock-tracking app for the casual investor

BankRoll is a simple stock-tracking app that allows users to add and follow the performance of their stocks in one place. Once an account is created, the user can search for any stock registered on the major exchanges using the built-in search bar, and see a graph of the stock's recent performance over ranges of 1 day, 1 week, 2 weeks, and 1 month. 

If the user wishes to track this stock for an extended period of time, they have the option of creating a stock list with their desired name, and can add as many stocks as they would like to this list. Each stock they add will appear in the stock bar at the top of the screen, and the current stock price and daily percent change will update for those stocks upon every data refresh. If they no longer wish to track the stock, they can simply click the `X` at the top right corner of the stock on the stock bar and it will be removed.

## Instructions for Use
1. Fork and Clone this repository
2. Navigate to this directory from the command line
3. Install dependencies by running an `npm install`
4. Once opened in your preferred code editor, host the site locally by running an `npm run serve` from the command line

## Technologies Used
- React Functional Programming Design
- MySQL Database Storage
- AWS RDS Database Hosting

## Additional Support Packages
- FinnHub finance API
- Recharts graphing library
- React-Select search bar
- React-Toastify error alerts
- Bootstrap tooltip integration

## Planning & Initial Design

Early on, the major priorities of this project were to be able to search for a given stock on the major exchanges, receive stock data over a given time range, and graph that data in a way that adequately (and aesthetically) represented the stock's performance.

Using many of the current stock-tracking software tools as a guide (see Apple's iOS 'Stocks', RobinHood), I set out to create a UI that took all of the nonsense out of checking your stocks. To accomplish this, I spent the early portion of the project researching the tools that would best accomplish that goal.

### Initial Wireframe Design

![Wireframe](https://i.imgur.com/DBEmiHA.png)

Once decided on the tools to use, I started by building out the major components of the home page. Using React, it would be easy enough to distribute these components to their final routes as the app was built without changing their basic structure. This meant I could essentially create the graph and search functions beforehand and then integrate those into the more dynamic application later. This also allowed me to get the difficult part out of the way early, and then deal with the more straight-forward portion when time was more limited.

Alongside this, I decided to knock out the full back-end in one chunk, rather than adding to it as I went. I did as much of the front-end work as I could early on, then identified the needs of the database and the routes to accomplish that, and then focused singularly on designing, testing, and integrating that in one sitting to give it my full attention.

With a functional back-end, I then worked to integrate the dynamic aspects of the site into the front end. This included all of the stock/list operations of creation, addition, and deletion. 

Alongside this, I focused on styling throughout to maintain consistency and to ensure I wouldn't need to go back and re-complete work to make it look the way I wanted. This significantly reduced the time to completion and kept things moving swiftly.

## Future Work

While the project is in a relatively steady state, there are many additional features that can be added. To name a few:
- WebSocket integration to the Stock Bar at the top of the screen. The app is set up to subscribe to and receive data from stocks via the FinnHub WebSocket, but more work is required to fully integrate this into the front end. 
- Interactive styling. Didn't have time to get to this but would be nice to see more interaction on the page to selecting stocks, lists, and displaying stock performance
- A `News` section. This data can be obtained from the FinnHub API, but support is needed to build the front-end page to display the data and some planning needs to go into place to support displaying it and accessing the news articles
- Full portfolio tracking, including tracking the value of stocks that were purchased at a certain price and the full value of a portfolio.
- Aggregation of a list's performance. This would show the sum of the performance of all of the stocks in a list to generally show how the list is doing. Useful to track all of one's investments in a specific industry.
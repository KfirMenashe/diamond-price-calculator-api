# DiamondPriceCalculator

A web api server and UI for calculating diamond price.
Uses Nestjs, Angular and MySql.

# Assumptions/Explanations
Implemented basic formula to calculate diamond price, it doesn't have much logic in it though. 

The calculation can be found in the server project under src/diamond-pricing/price-calculator.

Because of time constraint, the price-calculator object is the only tested component, but I did want to add some tests to the project and this object made sense as it includes the main logic.

I decided to use DB to save configuration data (shapes, colors, etc...) and a Diamond repository table just to make the system more complete.

Data is being seeded anytime the app starts, see: src/seeder and main.ts.
Diamonds include imageUrl field , but I decided to use just a placeholder service to generate fake placeholder images, so no real diamonds images :(

Basic UI. I did touch on things that are important to UX such as, loading spinner, navigation (including page not found, clickable logo), responsiveness and some more...  

Other things that I would implement if I spent more time are:

input validation (server side, though invalid data will be handled or cause exception down the pipe)

robust exception handling (using Nest default)

xsrf protection

real images

real price calc algo

many UI improvements, for example adding small thumbnails to the dropdown that show example for shape, color, clarity. Better similar image viewer, creating single loading service, creating error service,  etc...






# Run tests
npm run tests


# Run app
Install docker if it is not already installed on your system.

Create and run MySql container (you may need to run them as sudo in case you encounter permissions issues):
    
    docker pull mysql
    docker run --name worthy-mysql -p 3300:3306 -e MYSQL_ROOT_PASSWORD=mysqliscool1! -d mysql

Navigate to server project root directory and run:

    npm start

Navigate to ui project root directory and run:

    npm start



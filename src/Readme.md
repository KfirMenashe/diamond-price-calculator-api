# DiamondPriceCalculator

A web api server and UI for calculating diamond price.
Uses Nestjs, Angular and MySql.

# Root directories 

API : diamond-price-calculator-api

UI: diamond-price-calculator-ui

# Assumptions/Explanations
Implemented basic formula to calculate diamond price, it doesn't have much logic in it though. 

The calculation can be found in the API project under src/diamond-pricing/price-calculator.

Because of time constraint, the price-calculator object is the only tested component, but I did want to add some tests to the project and this object made sense as it includes the main logic.

I decided to use DB to store configuration data (shapes, colors, etc...) and a Diamond repository table to make the system more complete.

Data is being seeded anytime the app starts, see: src/seeder which runs when the app bootstraps.
Diamonds include imageUrl field , to populate it, I decided to use a placeholder service to generate fake placeholder images, so no real diamonds images :(

UI is Basic. I did touch on things that are important to UX such as, loading spinner, navigation (including page not found, clickable logo, url parameters for bookmarking, etc...), responsiveness and more... 

Other things that I would implement if I spent more time are:

use environment vars (or any other secured store) to store secrets

input validation (server side, though invalid data will be handled or cause exception down the pipe)

more robust exception handling (using Nest default)

xsrf protection

real images

real price calc algo

many UI improvements, for example adding small thumbnails to the dropdown that show example for shape, color, clarity. Better similar image viewer, creating single loading service, creating error service,  etc...

And probably more that I am forgetting.






# Run tests

npm run tests


# Run app
Install docker if it is not already installed on your system.

Create and run MySql container (you may need to run them as sudo in case you encounter permissions issues):
    
    Option 1 - using docker

    in terminal run:

    docker pull mysql

    docker run --name worthy-mysql -p 3333:3306 -e MYSQL_ROOT_PASSWORD=iLovemysql2@ -d mysql
    
    Then connect to the DB
        mysql -u root --port 3333 --host 127.0.0.1  -p
        
        CREATE DATABASE worthy;

        exit;
    
    Option 2 - local MySql instance

    In case you have MySql installed on your machine, create a database name 'worthy' and update connection details in src/app.module.ts -> Module -> imports -> SequelizeModule.forRoot config.


Navigate to API root directory and run:

    npm start

Navigate to UI root directory and run:

    npm start



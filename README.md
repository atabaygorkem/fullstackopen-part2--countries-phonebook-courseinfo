# 

There are 3 seperate projects. They are not dependent on each other.
countries and phonebook projects need some configuration to work.

# countries

You need an [OpenWeatherMap](https://openweathermap.org/api) API key to run the project.
- After **npm install** in the root of the project, 
you need to create **.env** file in the root of the countries project.
- Then set REACT_APP_API_KEY=**your_api_key** in .env file.
After all **npm start** to run the app.


# phonebook

After **npm install** in the root of the project
- Open another console in the same directory and run command **npm run server** to run [json-server](https://github.com/typicode/json-server)
- **npm start** to run the app.

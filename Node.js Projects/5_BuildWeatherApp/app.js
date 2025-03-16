// import https from "https";  //NO NEED
import readline from "readline/promises";
import chalk from "chalk";

import dotenv from 'dotenv';
dotenv.config();

const rl = readline.createInterface({  //interface jispe hm kuch b read ya write kr ske
    input:process.stdin, 
    output:process.stdout
})

const BASE_URL = process.env.URL;  
const API_KEY = process.env.API_KEY;


const getWeather= async (city) => {
    const url= `${BASE_URL}?q=${city}&APPID=${API_KEY}&units=metric`;

    try{
        const response= await fetch(url);
        if(!response.ok){
            throw new Error(`City no found. Please check the city name.`)
        }
        const weatherData= await response.json();

        console.log(chalk.blue.bgRed.bold(`\nWeather Information: `));
        console.log(chalk.blue.bgRed.bold(`City: ${weatherData.name}`));
        console.log(chalk.blue.bgRed.bold(`Temperature: ${weatherData.main.temp}°C`));
        console.log(chalk.blue.bgRed.bold(`Description: ${weatherData.weather[0].description}`));
        console.log(chalk.blue.bgRed.bold(`Humidity: ${weatherData.main.humidity}%`));
        console.log(chalk.blue.bgRed.bold(`Wind Speed: ${weatherData.wind.speed} m/s\n`));

        // console.log(`\nWeather Information: `);
        // console.log(`City: ${weatherData.name}`);
        // console.log(`Temperature: ${weatherData.main.temp}°C`);
        // console.log(`Description: ${weatherData.weather[0].description}`);
        // console.log(`Humidity: ${weatherData.main.humidity}%`);
        // console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
    } catch (error) {
        console.log(error);
    }
}

const city= await rl.question(`Enter a city name to get its weather: `);
await getWeather(city);
rl.close();

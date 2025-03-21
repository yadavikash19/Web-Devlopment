import https from "https";
import readline from "readline";
import chalk from "chalk";

import dotenv from 'dotenv';
dotenv.config();


const rl = readline.createInterface({  //interface jispe hm kuch b read ya write kr ske
    input:process.stdin, 
    output:process.stdout
})

const url = process.env.URL;  
const apiKey = process.env.API_KEY;
// console.log("API URL:", url);
// console.log("API Key:", apiKey);


//phla get method jisme phle konsi url or fir callback function jisme  incomingmessage mil rha h jisko hm response naam k object me pass kr de rhe h, response ek readable string jisme hm 3 events ko listen kr skte h- data,end,error
https.get(url, (response)=>{
    let data= "";
    response.on('data', (chunk)=>{
        data += chunk;
    })
    response.on('end', ()=>{  //ab data milne ke baad end wala ki ab kha show krna h
        console.log("🔍 Raw API Response:", data);

        try {
            const parsedData = JSON.parse(data);
            console.log("✅ Parsed JSON:", parsedData);
        } catch (error) {
            console.error("❌ JSON Parsing Error:", error.message);
        }
        const rates= JSON.parse(data).conversion_rates;

        // console.log(rates);

        rl.question('Enter the amout in USD: ', (amount)=>{
            rl.question(`Enter the target currency (e.g. INR, EUR, NPR): `, (currency)=>{
                const rate= rates[currency.toUpperCase()];
                const convertCurrency=rate*amount;
                if(rate){
                    console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency} ${currency.toUpperCase()}`));
                    // console.log(`${amount} USD is approximately ${convertCurrency} ${currency.toUpperCase()}`);
                }
                else{
                    console.log(`Invalid Currency Code`);
                }
                rl.close();
            })
        })
    })
    response.on('err', (err => {
        console.log(`Error fetching the joke, ${err.message}`);
    }))
})    
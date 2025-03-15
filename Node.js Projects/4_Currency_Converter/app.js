import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({  //interface jispe hm kuch b read ya write kr ske
    input:process.stdin, 
    output:process.stdout
})

const url= `https://v6.exchangerate-api.com/v6/9ae4f0af1b80288f5859b6ca/latest/USD`;
const apiKey= `9ae4f0af1b80288f5859b6ca`;

//phla get method jisme phle konsi url or fir callback function jisme  incomingmessage mil rha h jisko hm response naam k object me pass kr de rhe h, response ek readable string jisme hm 3 events ko listen kr skte h- data,end,error
https.get(url, (response)=>{
    let data= "";
    response.on('data', (chunk)=>{
        data += chunk;
    })
    response.on('end', ()=>{  //ab data milne ke baad end wala ki ab kha show krna h
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
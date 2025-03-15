
import https from 'https'
import chalk from 'chalk'

const getJoke= () => {
    const url= `https://official-joke-api.appspot.com/random_joke`;

    https.get(url, (response) => { //response is https.incomingmessage, readable string
        let data= "";
        response.on('data', (chunk)=>{
            data += chunk;
        })
        response.on('end', () => {   //event khatam hone ke baad humko kya hi milega to in callback function- no parameter
            const joke= JSON.parse(data);  //jo data json me mila hai usko JS obj me convert kiya h
            console.log(joke);
            console.log(`Here is a random  ${joke.type} joke:`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
        })
        response.on('err', (err => {
            console.log(`Error fetching the joke, ${err.message}`);
        }))
    })

}
getJoke();
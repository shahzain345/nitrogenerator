const generator = require('string-generator-js');
const fs = require('fs')
const io = require('console-read-write')
const os = require('os')
async function main() {
    await io.write("Enter the number of codes you want to genertate:")
    const numberOfCodes = await io.read()
    const integer = await parseInt(numberOfCodes, 10)
    if (integer > 2000 ) {
        console.log("Error: The number given should not be more than 2000\nTerminal clossing in 30 seconds")
        setTimeout(() => {
            console.log("Bye!")
        }, 30000)
        return;
    }
    if (isNaN(integer)) {
        console.log(`Error: ${numberOfCodes} is not a number! \nTerminal clossing in 30 seconds`)
        setTimeout(() => {
            console.log("Bye!")
        }, 30000)
        return;
    }
for (let i = 0; i < integer; i++) {
    let options = {length:16}
let code = generator.generate(options)
let newData = `https://discord.gift/${code}`
fs.readFile('nitros.txt', (err, data) => {
    if (err) throw err
    if (!data) {
        fs.writeFile('./nitros.txt', newData + os.EOL)
    } else if (data) {
        fs.appendFile('./nitros.txt', newData + os.EOL, 'utf8', function(error) {
            if (error) return console.log('An error occured, try again!')
        })
    }
})
console.log(newData)
}
console.log("Nitro codes succesfully generated!\nTerminal clossing in 30 seconds!")
setTimeout(() => {
    console.log("Bye!")
}, 30000)
}
console.log(`Welcome to Shahzain Nitro generator!`)
main()
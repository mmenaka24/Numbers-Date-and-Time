import { askForInt } from "./functions.js";

const convertToBinary = function (number) {
    let listOfDigits = [];
    let quotient = number;

    while (true) {
        const remainder = quotient % 2;
        quotient = Math.floor(quotient / 2);

        listOfDigits.unshift(remainder);

        if (quotient < 2) {
            listOfDigits.unshift(quotient);
            break;
        }
    }

    return listOfDigits.join("");
};

const main = async function () {
    const baseTen = await askForInt();
    const binary = convertToBinary(baseTen);
    console.log(`${baseTen} in binary is ${binary}`);
};

main();

import { askForInt } from "./functions.js";

const convertToHexadecimal = function (number) {
    return number.toString(16);
};

const main = async function () {
    const baseTen = await askForInt();
    const hexadecimal = convertToHexadecimal(baseTen);
    console.log(`${baseTen} in hexadecimal is ${hexadecimal}`);
};

main();

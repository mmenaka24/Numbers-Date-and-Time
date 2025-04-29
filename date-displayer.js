import { askForDate } from "./functions.js";

const convertDateStrToLocaleDateStr = function (dateStr) {
    const date = new Date(dateStr);
    const localeDateSTr = [
        date.toLocaleDateString(),
        date.toLocaleTimeString(),
    ];
    return localeDateSTr.join(" at ");
};

const main = async function () {
    const dateStr = await askForDate();
    console.log(
        "That is",
        convertDateStrToLocaleDateStr(dateStr),
        "in your local time"
    );
};

main();

import { askForDate } from "./functions.js";

const convertDateStrToLocaleDateStr = function (dateStr) {
    const date = new Date(dateStr);
    const localeDateSTr = [
        date.toLocaleDateString(),
        date.toLocaleTimeString(),
    ];
    return localeDateSTr.join(" at ");
    let dateArr = dateStr.split("-");
    // [YYYY, MM, DDTHH:mm:ss.sssZ here:]
    dateArr[2].split("T");
    // [YYYY, MM, [DD, HH:mm:ss.sssZ]]
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

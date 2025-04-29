import { askQuestion } from "./functions.js";

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

const askForDate = async function () {
    while (true) {
        let possibleDate = await askQuestion(
            "Please give a date in the format YYYY-MM-DDTHH:mm:ss.sssZ here: "
        );

        const dateRegex =
            /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}([+-][0-9]{2}:[0-9]{2})?/gm;

        try {
            const isDate = possibleDate.match(dateRegex);
            if (isDate) {
                return possibleDate;
            } else {
                throw new Error("Input is not a date in the valid format");
            }
        } catch (err) {
            console.error("Error:", err.message);
        }
    }
};

const main = async function () {
    console.log(
        `This programme converts to local time a date given in UTC in the format YYYY-MM-DDTHH:mm:ss.sssZ where...
        YYYY is the year
        MM is the month
        DD is the day of the month
        T appears literally in the string indicating the beginning of the time element
        HH is the hours
        mm is the minutes
        ss is the seconds
        sss is the number of milliseconds
        Z is the UTC offset (optional, in the form +/-HH:mm)`
    );
    console.log(
        "So midnight on the 5th Feb 1995 in Tokyo (UTC+9) would be 1995-02-05T00:00:00.000+09:00"
    );
    const dateStr = await askForDate();
    console.log(
        "That is",
        convertDateStrToLocaleDateStr(dateStr),
        "in your local time"
    );
};

main();

import { askForDate } from "./functions.js";

const checkDateBetweenDates = function (dates) {
    return dates[0] <= dates[2] <= dates[1] || dates[1] <= dates[2] <= dates[0];
};

const main = async function () {
    console.log(
        "Enter three dates - this programme checks if the third is between the first and the second!"
    );
    let dates = [null, null, null];
    for (const i in [0, 1, 2]) {
        const dateToAdd = await askForDate();
        dates[i] = new Date(dateToAdd);
    }
    console.log(
        checkDateBetweenDates(dates)
            ? "yep, that's between those dates"
            : "nope, that's not between those dates"
    );
};

main();

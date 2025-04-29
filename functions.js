import readline from "readline";

export const askQuestion = function (query) {
    const rl = readline.createInterface(process.stdin, process.stdout);

    // To give message when programme is exited
    rl.on("SIGINT", () => {
        console.log("\nExiting programme.");
        rl.close();
        process.exit();
    });

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

export const askForInt = async function () {
    while (true) {
        let possibleInt = await askQuestion(
            "Please enter an integer in base 10: "
        );
        try {
            possibleInt = Number(possibleInt);
            if (isNaN(possibleInt)) {
                throw new Error("Input is not a number");
            } else if (Number.isInteger(possibleInt)) {
                return possibleInt;
            } else {
                throw new Error("Input is not an integer");
            }
        } catch (err) {
            console.error("Error:", err.message);
        }
    }
};

export const askForDate = async function () {
    console.log(
        `This programme converts a date given in UTC in the format YYYY-MM-DDTHH:mm:ss.sssZ where...
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

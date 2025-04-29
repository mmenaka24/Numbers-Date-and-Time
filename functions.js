import readline from "readline";

export const askQuestion = function (query) {
    const rl = readline.createInterface(process.stdin, process.stdout);

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

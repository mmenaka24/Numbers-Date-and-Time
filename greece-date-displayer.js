//should use Intl.DateTimeFormat instead

const convertToGreeceStyle = function (date) {
    return new Intl.DateTimeFormat("el-GR", {
        timeZone: "EET",
        timeStyle: "short",
        dateStyle: "medium",
    }).format(date);
};

const convertToEnglishStyle = function (date) {
    return new Intl.DateTimeFormat("en-GB", {
        timeZone: "EET",
        timeStyle: "short",
        dateStyle: "medium",
    }).format(date);
};

const main = function () {
    currentDate = new Date();
    console.log("Current Date & Time in Greece:");
    console.log(convertToGreeceStyle(currentDate));
    console.log(convertToEnglishStyle(currentDate));
};

main();

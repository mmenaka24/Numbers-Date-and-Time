const convertToDisplayDate = function (date) {
    return new Intl.DateTimeFormat("en-GB", {
        timeZone: "UTC",
        hour12: "true",
        weekday: "long",
        hour: "numeric",
    }).format(currentDate);
};
const main = function () {
    currentDate = new Date();
    console.log("It is", convertToDisplayDate(currentDate));
};

main();

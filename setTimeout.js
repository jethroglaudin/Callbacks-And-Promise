function callMeWhenYourDone() {
    console.log("Yayy I've got your call");

}

const timeInMiliseconds = 1000;

// const callMeWhenYourThrew = () => {
//     console.log("Yayy I've got your call");
// }

setTimeout(callMeWhenYourDone, timeInMiliseconds);
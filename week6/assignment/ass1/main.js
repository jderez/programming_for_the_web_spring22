const {createApp} = Vue;

createApp({
    data() {
       return {
        animal: "Llamas",
        learn: true,
        poop: "no odor.",
        social: "train",
        height: "6 feet",
        communication: "Humming",
        workspaces: "hospitals and schools",
        celebrate: "December 9th",
        spit: "agitated",
        diet: "vegetarians",
        relatives: "camels, alapacas, vicuñas, and guanacos",

        }
    }
}).mount("#myFacts");
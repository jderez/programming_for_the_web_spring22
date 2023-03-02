// can't put {{}} inside "" in html
const {createApp} = Vue;

createApp({ 
    data() {
        return {
            
            // list style
            pageHeader: {
                textAlign: 'center',
                fontFamily: "Courier New, sans-serif",
            },

            flexContainer: {
                display: "flex", 
               justifyContent: "space-around",
            },

            itemStyle: {
                fontFamily: "sans-serif",
                margin: '20px',
            },

            // facts
            llamaFact1: "Llamas are smart.",
            llamaFact2: "A llama's lifespan is 20 years",
            llamaFact3: "Llamas are very social",
            llamaFact4: "Llamas can grow as much as 6 feet tall",
            llamaFact5: "Llamas can hum",

            alpacaFact1: "Alpacas are old",
            alpacaFact2: "They are therapeutic animals",
            alpacaFact3: "They have high quality, hypoallergenic fleece",
            alpacaFact4: "Alpacas come in 22 colors and hundreds of shades.",
            alpacaFact5: "Their fur is flame and water resistant!",

            currentRoute: "llamaWiki",
            llamaLink: "https://en.wikipedia.org/wiki/Llama",
            llamaTitle: "furriest creature on earth",
            alpacaLink: "https://en.wikipedia.org/wiki/Alpaca",
            alpacaTitle: "second furriest",
        }
        
    }
}).mount("#myApp");
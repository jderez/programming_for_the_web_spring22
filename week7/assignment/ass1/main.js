const { createApp } = Vue;
createApp({
    data () {
        return {
            cars: [
                {   name: "MERCEDES-AMG GLE COUPÉ",
                nickname: "Mercedes",
                manufacturer: "Mercedes-Benz Group AG",
                activeYears: "1926",
                description: "With the Mercedes-AMG GLE Coupé, there are no limits to your thirst for adventure. The fully variable 4MATIC+ all-wheel drive gives you exactly the grip you need on any surface."
            }, {
                name: "BMW X5 M Competition",
                nickname: "BMW",
                manufacturer: "BMW Group",
                activeYears: "1913",
                description: "Every X5 M Competition utilizes an eight-speed automatic transmission and a variable all-wheel-drive system."
            }, {
                name: "F Tributo Special Edition",
                nickname: "Maserati",
                manufacturer: "Fiat Chrysler Automobiles",
                activeYears: "1926",
                description: "This Special Edition pays homage to the first woman to compete in Formula 1, the intrepid Maria Teresa de Filippis. The most impressive appearance of your high-performance Levante and Ghibli is designed to fuel your love of speed."
            }, {
                name: "Jaguar E-Pace",
                nickname: "Jaguar",
                manufacturer: "Tata Motors",
                activeYears: "1922",
                description: "Experience the excitement of driving a Jaguar SUV, with the benefit of Configurable Dynamics, the AWD (All Wheel Drive) system and the optional Adaptive Dynamics suspension system."
            }, {
                name: "MERCEDES-AMG GLE COUPÉ",
                nickname: "Mercedes",
                manufacturer: "Mercedes-Benz Group AG",
                activeYears: "1926",
                description: "With the Mercedes-AMG GLE Coupé, there are no limits to your thirst for adventure. The fully variable 4MATIC+ all-wheel drive gives you exactly the grip you need on any surface."
            },
            ]
        }

    }
}).mount("#myApp");

let vm = new Vue({
    el: "#myCollectionApp",
    data: {
        consoles: [    
            {   name: "MERCEDES-AMG GLE COUPÉ",
                nickname: "Mercedes",
                manufacturer: "Mercedes-Benz Group AG",
                activeYears: "1926",
                description: "With the Mercedes-AMG GLE Coupé, there are no limits to your thirst for adventure. The fully variable 4MATIC+ all-wheel drive gives you exactly the grip you need on any surface."
            }, {
                name: "BMW X5 M Competition",
                nickname: "BMW",
                manufacturer: "BMW Group",
                activeYears: "1913",
                description: "Every X5 M Competition utilizes an eight-speed automatic transmission and a variable all-wheel-drive system."
            }, {
                name: "F Tributo Special Edition",
                nickname: "Maserati",
                manufacturer: "Fiat Chrysler Automobiles",
                activeYears: "1926",
                description: "This Special Edition pays homage to the first woman to compete in Formula 1, the intrepid Maria Teresa de Filippis. The most impressive appearance of your high-performance Levante and Ghibli is designed to fuel your love of speed."
            }, {
                name: "Jaguar E-Pace",
                nickname: "Jaguar",
                manufacturer: "Tata Motors",
                activeYears: "1922",
                description: "Experience the excitement of driving a Jaguar SUV, with the benefit of Configurable Dynamics, the AWD (All Wheel Drive) system and the optional Adaptive Dynamics suspension system."
            }, {
                name: "MERCEDES-AMG GLE COUPÉ",
                nickname: "Mercedes",
                manufacturer: "Mercedes-Benz Group AG",
                activeYears: "1926",
                description: "With the Mercedes-AMG GLE Coupé, there are no limits to your thirst for adventure. The fully variable 4MATIC+ all-wheel drive gives you exactly the grip you need on any surface."
            }]
    }
})
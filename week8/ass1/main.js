Vue.createApp({
    data() {
      return {
        newRacket: {
            brand: "",
            tennisPlayer: "",
            matches: "",
            description: "",
            image: ""
        },
        rackets: [
            {
                brand: "Babolat",
                tennisPlayer: "Rafa",
                matches: "4",
                description: "With their Hybrid Beam Construction, the Babolat Pure Strike series offers more control and feel than the Pure Drive and Aero franchises. These racquets also offer impressive stability for the weight along with FSI Technology, which optimizes string spacing to enhance spin and power.",
                image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwd547a302/images/63424901/Rebel_63424901_orangepurple_hi-res.jpg?sw=300&sh=300&sm=fit&q=60"
              }, {
                brand: "Babolat",
                tennisPlayer: "Rafa",
                matches: "120",
                description: "With their Hybrid Beam Construction, the Babolat Pure Strike series offers more control and feel than the Pure Drive and Aero franchises. These racquets also offer impressive stability for the weight along with FSI Technology, which optimizes string spacing to enhance spin and power.",
                image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw3f9963b4/images/57994101/Rebel_57994101_yellowblack_hi-res.jpg?sw=300&sh=300&sm=fit&q=60"
              }, {
                brand: "Wilson",
                tennisPlayer: "Fritz",
                matches: "4",
                description: "Offering a tantalizing mix of precision, feel, control, and spin, these rackets are extremely popular the world over. Slightly less powerful than the Ultra, Burn, or Clash rackets, the Wilson Blades allow for players with full swings to maximize their racket head speed and attack the ball with confidence",
                image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw515e2cd0/images/63584101/Rebel_63584101-00_black_hi-res.jpg?sw=300&sh=300&sm=fit&q=60"
              }, {
                brand: "Wilson",
                tennisPlayer: "Djoko",
                matches: "3",
                description: "Offering a tantalizing mix of precision, feel, control, and spin, these rackets are extremely popular the world over. Slightly less powerful than the Ultra, Burn, or Clash rackets, the Wilson Blades allow for players with full swings to maximize their racket head speed and attack the ball with confidence.",
                image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwf7f0b949/images/63660601/Rebel_63660601_hi-res.jpg?sw=300&sh=300&sm=fit&q=60"
              }, 
        ]
      }
    },
    methods: {
      submitHandler() {
        this.rackets = this.rackets.concat(this.newRacket);
        this.resetForm();
      },
      resetForm() {
        this.newRacket = {
            brand: "",
            tennisPlayer: "",
            matches: "",
            description: "",
            image: ""
      }
    },
      deleteItem (rackets) {
        this.rackets = this.rackets.filter(rackets => {
          return rackets !== rackets;
        })
      }
    }
  }).mount("#myRackets");

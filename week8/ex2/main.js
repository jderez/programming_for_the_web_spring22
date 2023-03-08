Vue.createApp({
    data() {
      return {
        num1: 0,
        num2: 0,
        operator: '+',
        result: null
      }
    },
    methods: {
        calculate() {
          switch (this.operator) {
            case '+':
              this.result = Number(this.num1) + Number(this.num2);
              break;
            case '-':
              this.result = Number(this.num1) - Number(this.num2);
              break;
            case '*':
              this.result = Number(this.num1) * Number(this.num2);
              break;
            case '/':
              if (Number(this.num2) !== 0) {
                this.result = Number(this.num1) / Number(this.num2);
              } else {
                this.result = null;
                alert("Cannot divide by zero");
              }
              break;
            default:
              this.result = null;
              break;
          }
        }
      }
    }).mount('#app');
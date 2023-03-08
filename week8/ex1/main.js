Vue.createApp({
    data() {
      return {
        firstName: '',
        lastName: '',
        streetAddress: '',
        stateProvince: 'MN',
        availableStates: [
            { value: 'AL', name: 'Alabama' },	
            { value: 'AK', name:  'Arizona'	},
            { value: 'AR', name: 'Arkansas'	},
            { value: 'CA', name: 'California' },
             { value: 'CO', name: 'Colorado'	},
             { value: 'CT', name: 'Connecticut' },
             { value: 'DE', name: 'Delaware'	},
             { value: 'FL', name: 'Florida' }
            ],
        country: '',
        alpacaColors: ['white', 'brown', 'black', 'gray'],
        selectedColors: [],
        status: '',
      }
    }
  }).mount('#app');
import axios from 'axios'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.store('globals', {
  selectFont : 'inter',
  darkMode: false,
  setError: false,


  toggleDarkmode() {
    this.darkMode = !this.darkMode
  },
  // toggleError() {
  //   this.setError = !this.setError
  // },
  word:'',
  words: [],

  errorMessage: {},
  showErrorMessage: false,


  getWord() {

    if(this.word === '') {
      this.setError = true;
      this.showErrorMessage = false;
    } else {

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
      .then((result) => {
        this.words = result.data
        this.showErrorMessage = false;
        this.setError = false;


      })
      .catch((err) => {
        this.errorMessage = err.response.data;
        console.log(this.errorMessage);
        this.showErrorMessage = true;
        this.words = [];

      });
  }},
})

Alpine.start()



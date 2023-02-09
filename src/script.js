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
  toggleError() {
    this.setError = !this.setError
  },
  word:'',
  words: [],
  getWord() {
    if(this.word === '') {
      this.setError = true;
    } else {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
      .then((result) => {
        this.words = result.data
        this.setError = false;
        console.log(this.words);
      })
      .catch((err) => console.log(err));
  }},
})

Alpine.start()



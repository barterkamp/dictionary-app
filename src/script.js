import axios from 'axios'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.store('globals', {
    selectFont : 'inter',
    darkMode: false,
    toggle() {
        this.darkMode = !this.darkMode
    },
  word:'',
  words: [],
  getWord() {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
      .then((result) => {
        this.words = result.data
        console.log(this.words);
      })
      .catch((err) => console.log(err));
  },
})

Alpine.start()

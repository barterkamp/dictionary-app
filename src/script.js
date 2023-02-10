import axios from "axios";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("globals", {
  selectFont: "inter",
  darkMode: false,

  toggleDarkmode() {
    this.darkMode = !this.darkMode;
  },

  word: "",
  words: [],

  audioFile: "",
  playAudio() {
    let audio = new Audio(`${this.audioFile}`);
    audio.play();
  },

  setError: false,
  errorMessage: {},
  showErrorMessage: false,

  getWord() {
    if (this.word === "") {
      this.setError = true;
      this.showErrorMessage = false;
    } else {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
        .then((result) => {
          this.words = result.data;

          // Find a single audio file in the phonetics array
          let audioArray = this.words.map((word) =>
            word.phonetics
              .filter((obj) => obj.hasOwnProperty("audio"))
              .find((obj) => obj.audio)
          );
          this.audioFile = audioArray[0]["audio"];
          this.showErrorMessage = false;
          this.setError = false;
        })
        .catch((err) => {
          this.errorMessage = err.response.data;
          this.showErrorMessage = true;
          this.words = [];
        });
    }
  },
});

Alpine.start();

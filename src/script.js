import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.store('globals', {
    selectFont : 'inter',
    darkMode: false,
    toggle() {
        this.darkMode = !this.darkMode
    },
})

Alpine.start()

import type { Alpine as AlpineType } from 'alpinejs'
import Alpine from 'alpinejs'

// Extend window interface before any Alpine usage
declare global {
  interface Window {
    Alpine: AlpineType
  }
}

// Initialize Alpine.js
window.Alpine = Alpine

// Define mobile menu store
Alpine.store('mobileMenu', {
  isOpen: false,
  toggle() {
    this.isOpen = !this.isOpen
  },
  close() {
    this.isOpen = false
  }
})

// Start Alpine.js
Alpine.start()

// Export for TypeScript
export default Alpine
import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="mobile-menu"
export default class extends Controller {
  static targets = ["menu"];
  connect() {}

  mobile_menu(event) {
    event.preventDefault();
    const menu = this.menuTarget;
    menu.classList.toggle("hidden");
  }
}

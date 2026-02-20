import { Component } from "@ribajs/core";
import { EventDispatcher } from "@ribajs/events";
import { ModalNotification } from "@ribajs/bs5";
import _contact from "../../../content/contact.yml";

interface DirectionsService {
  name: string;
  url: string;
  icon?: string;
}

interface ContactData {
  directions_services?: DirectionsService[];
  label_directions_button?: string;
}

export interface DfwDirectionsSelectorScope {
  services: DirectionsService[];
  openModal: (event: CustomEvent) => void;
}

export class DfwDirectionsSelectorComponent extends Component {
  public static tagName = "dfw-directions-selector";

  protected autobind = true;

  static get observedAttributes(): string[] {
    return [];
  }

  public scope: DfwDirectionsSelectorScope = {
    services: ((_contact as unknown) as ContactData).directions_services || [],
    openModal: this.openModal.bind(this),
  };

  constructor() {
    super();
    this.scope.openModal = this.openModal.bind(this);
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(DfwDirectionsSelectorComponent.observedAttributes);
  }

  protected async afterBind() {
    await super.afterBind();
    this.initTriggers();
  }

  protected initTriggers() {
    // Find all buttons with data-directions-trigger attribute and attach click handlers
    const triggers = document.querySelectorAll<HTMLElement>("[data-directions-trigger]");
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        this.openModal(event as CustomEvent);
      });
    });
  }

  public openModal(event: CustomEvent): void {
    const services = this.scope.services;
    if (services.length === 0) return;

    // Create buttons for each service
    // We'll use a custom message with buttons that have data-url attributes
    // and handle clicks via event delegation
    const buttonsHtml = services
      .map(
        (service) =>
          `<button type="button" class="btn btn-primary directions-service-btn" data-url="${service.url}" onclick="window.open(this.dataset.url, '_blank', 'noopener,noreferrer'); this.closest('.modal').querySelector('.btn-close').click();">
            ${service.name}
          </button>`,
      )
      .join("");

    const notificationDispatcher = new EventDispatcher("directions");
    const modal: ModalNotification = new ModalNotification({
      title: "Anfahrt berechnen",
      message: `<p class='mb-3'>Wählen Sie einen Routenplaner:</p><div class="d-grid gap-2">${buttonsHtml}</div>`,
      contextualClass: "primary",
      buttons: [], // No buttons in footer, we use inline buttons in message
      $event: event,
      $context: this.scope,
    });
    notificationDispatcher.trigger("show-notification", modal);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected template(): string | null {
    // No template needed - component only handles logic
    return null;
  }
}

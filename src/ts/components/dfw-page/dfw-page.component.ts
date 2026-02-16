import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom.js";

import templateHtml from "./dfw-page.component.html?raw";

export class DfwPageComponent extends Component {
  public static tagName = "dfw-page";

  protected autobind = true;

  static get observedAttributes(): string[] {
    return ["title", "html"];
  }

  public scope = {
    title: "",
    html: "",
  };

  protected connectedCallback() {
    super.connectedCallback();
    this.init(DfwPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return ["title", "html"];
  }

  protected template(): string | null {
    if (hasChildNodesTrim(this)) {
      return null;
    }
    return templateHtml;
  }
}

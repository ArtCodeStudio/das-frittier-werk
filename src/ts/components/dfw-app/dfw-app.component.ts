import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom.js";

import * as aboutContent from "../../../content/about.md";
import * as qualityContent from "../../../content/quality.md";

export class DfwAppComponent extends Component {
  public static tagName = "dfw-app";

  protected autobind = true;

  private shineRafId: number | null = null;
  private readonly boundUpdateShineFromPointer = (e: MouseEvent) =>
    this.updateShineFromPointer(e);
  private readonly boundUpdateShineFromViewport = () =>
    this.updateShineFromViewport();
  private usePointer = false;

  static get observedAttributes(): string[] {
    return [];
  }

  public scope = {
    about: {
      title: (aboutContent as any).attributes?.title || "Über uns",
      html: (aboutContent as any).html || "",
    },
    quality: {
      title: (qualityContent as any).attributes?.title || "Qualität",
      html: (qualityContent as any).html || "",
    },
    currentYear: new Date().getFullYear(),
  };

  private setShine(x: string, y: string): void {
    document.documentElement.style.setProperty("--shine-x", x);
    document.documentElement.style.setProperty("--shine-y", y);
  }

  private updateShineFromPointer(e: MouseEvent): void {
    if (this.shineRafId !== null) return;
    this.shineRafId = requestAnimationFrame(() => {
      this.shineRafId = null;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      this.setShine(`${x}%`, `${y}%`);
    });
  }

  private updateShineFromViewport(): void {
    this.setShine("50%", "50%");
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(DfwAppComponent.observedAttributes);

    this.setShine("50%", "50%");
    this.usePointer = window.matchMedia("(pointer: fine)").matches;
    if (this.usePointer) {
      window.addEventListener("mousemove", this.boundUpdateShineFromPointer);
    } else {
      window.addEventListener("scroll", this.boundUpdateShineFromViewport, {
        passive: true,
      });
      window.addEventListener("resize", this.boundUpdateShineFromViewport);
    }
  }

  protected disconnectedCallback(): void {
    if (this.shineRafId !== null) {
      cancelAnimationFrame(this.shineRafId);
      this.shineRafId = null;
    }
    if (this.usePointer) {
      window.removeEventListener(
        "mousemove",
        this.boundUpdateShineFromPointer
      );
    } else {
      window.removeEventListener(
        "scroll",
        this.boundUpdateShineFromViewport
      );
      window.removeEventListener(
        "resize",
        this.boundUpdateShineFromViewport
      );
    }
    super.disconnectedCallback();
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async template() {
    if (hasChildNodesTrim(this)) {
      return null;
    } else {
      const { default: template } = await import(
        "./dfw-app.component.pug"
      );
      return template(this.scope);
    }
  }
}

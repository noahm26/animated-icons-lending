import { Component, NgZone } from "@angular/core";
import { AnimationItem } from "lottie-web";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-icon-equity",
  //templateUrl: "./icon-equity.component.html",
  template: `
    <ng-lottie
      width="120px"
      height="120px"
      [styles]="styles"
      [options]="options"
      (animationCreated)="animationCreated($event)"
      (complete)="complete($event)"
    ></ng-lottie>
  `,
  styleUrls: ["./icon-equity.component.css"]
})
export class IconEquityComponent {
  options: AnimationOptions = {
    name: "svgEquity",
    path: "/assets/animation-equity.json",
    autoplay: false,
    loop: false
  };

  styles: Partial<CSSStyleDeclaration> = {
    margin: "0 auto"
  };

  private animationItem: AnimationItem;

  constructor(private ngZone: NgZone) {}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    // animationItem.addEventListener("complete", () => {
    //   console.log("finished!");
    // });
    console.log(animationItem);
  }

  complete(e): void {
    //console.log(e);
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.stop());
  }

  pause(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.pause());
  }

  play = (): void => {
    //this.ngZone.runOutsideAngular(() => this.animationItem.play());
    this.ngZone.runOutsideAngular(() => this.animationItem.goToAndPlay(1));
  };
}

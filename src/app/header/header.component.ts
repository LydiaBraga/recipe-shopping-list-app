import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();

  collapsed: boolean = true;

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }

}

import { NgModule, Injector } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { createCustomElement } from "@angular/elements"
import { AppComponent } from "./app.component"
import { AngularComponent } from "./components/angular-component/angular-component.component"

@NgModule({
  declarations: [AppComponent, AngularComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AngularComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const angularElement = createCustomElement(AngularComponent, {
      injector: this.injector,
    })
    customElements.define("angular-element", angularElement)
  }
}

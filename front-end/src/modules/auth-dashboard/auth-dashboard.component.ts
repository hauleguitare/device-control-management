import { Component, OnDestroy, AfterViewInit, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-auth-dashboard-dashboard",
  template: '<div id="supertokensui"></div>',
  standalone: true
})
export class AuthDashboardComponent implements OnDestroy, AfterViewInit {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngAfterViewInit() {
    this.loadScript('https://cdn.jsdelivr.net/gh/supertokens/prebuiltui@v0.47.1/build/static/js/main.ba50d5ee.js');
  }

  ngOnDestroy() {
    // Remove the script when the component is destroyed
    const script = this.document.getElementById('supertokens-script');
    if (script) {
      script.remove();
    }
  }

  private loadScript(src: string) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.id = 'supertokens-script';
    script.onload = () => {
      (window as any).supertokensUIInit("supertokensui", {
        appInfo: {
          appName: "Manage Control Panel Device",
          apiDomain: "http://localhost:3567",
          websiteDomain: "http://localhost:4200",
          apiBasePath: "/auth-dashboard",
          websiteBasePath: "/"
        },
        recipeList: [
          (window as any).supertokensUIEmailPassword.init(),
          (window as any).supertokensUISession.init(),
        ],
      });
    }
    this.renderer.appendChild(this.document.body, script);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";


SuperTokens.init({
  appInfo: {
    appName: "Manage Control Panel Device",
    apiDomain: "http://localhost:3567",
    apiBasePath: "/auth",
  },
  recipeList: [
    Session.init(),
  ],
});



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-end';
}

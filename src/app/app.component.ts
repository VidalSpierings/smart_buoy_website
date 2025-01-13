import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/roots/dashboard/dashboard.component";
import { SensorenComponent } from "./components/roots/sensoren/sensoren.component";
import { GrenswaardenComponent } from "./components/roots/grenswaarden/grenswaarden.component";
import { MetingenComponent } from "./components/roots/metingen/metingen.component";
import { SplitListComponent } from "./components/children/split-list/split-list.component";
import { SchermbezoekenComponent } from "./components/roots/schermbezoeken/schermbezoeken.component";
import { QueriesUitvoerenComponent } from "./components/roots/queries-uitvoeren/queries-uitvoeren.component";
import { SignInUpComponent } from "./components/roots/sign-in-up/sign-in-up.component";
import { SensorBorderValuesComponent } from "./components/children/sensor-border-values/sensor-border-values.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, DashboardComponent, SensorenComponent, GrenswaardenComponent, SplitListComponent, MetingenComponent, SchermbezoekenComponent, QueriesUitvoerenComponent, SignInUpComponent, SensorBorderValuesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smart-buoy-two';
}

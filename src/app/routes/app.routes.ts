import { Routes } from "@angular/router";

import { HeroesComponent } from "../components/heroes/heroes.component"
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { HeroDetailsComponent } from "../components/hero-details/hero-details.component";

export const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },
    { path: "heroes", component: HeroesComponent },
    { path: "detail/:id", component: HeroDetailsComponent }
];

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../sevices/data.service";

@Component({
    moduleId: module.id,
    selector: "dashboard",
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {

    public heroes: Array<any>;

    public constructor(private router: Router, private data: DataService) {
        this.heroes = this.data.getHeroes();
    }

    public edit(id: number) {
        this.router.navigate(["/hero", id]);
    }

}
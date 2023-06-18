import { Component } from '@angular/core';
import { ReciepeServiceService } from '../reciepe-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favo',
  templateUrl: './favo.component.html',
  styleUrls: ['./favo.component.scss'],
})
export class FavoComponent {
  constructor(private rec: ReciepeServiceService, private router: Router) {}

  all = this.rec.Fav;
  allLength = this.all.length;

  details(id: string) {
    console.log(id);
    this.router.navigate([`/recipe/${id}`]);
  }
  deleteFromFav(recipe: any) {
    const ind = this.all.indexOf(recipe);
    this.all.splice(ind, 1);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, pipe } from 'rxjs';
interface Recipe {
  id: string;
  name: string;
  ingredients: string;
  imglink: string;
  instructions: string;
  servingsize: number;
  preptime: number;
}
@Component({
  selector: 'app-reciepe-details',
  templateUrl: './reciepe-details.component.html',
  styleUrls: ['./reciepe-details.component.scss'],
})
export class ReciepeDetailsComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private arouter: ActivatedRoute
  ) {}
  recipe: any;
  imgSrc: string = '';
  summary: string = '';
  ngOnInit() {
    this.arouter.paramMap.subscribe((router) => {
      let receipeId = router.get('id');

      this.http
        .get(`https://648a951717f1536d65e94e9e.mockapi.io/recieps/${receipeId}`)
        .pipe(
          catchError((err) => {
            console.log(err);

            return [];
          })
        )
        .subscribe((val) => {
          // console.log(val);

          this.recipe = val;
          console.log(this.recipe['id'], 'sanjay');
          this.imgSrc = this.recipe['img'];
          this.summary = this.recipe['instructions'];
        });
    });
  }
}

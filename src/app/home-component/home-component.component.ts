import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { ReciepeServiceService } from '../reciepe-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {
  title = 'rproject';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private rec: ReciepeServiceService
  ) {}

  searchForm = this.fb.group({
    searchField: [''],
  });

  reciepes: any;

  show = false;
  allRec$: any;
  length = false;
  ngOnInit() {
    this.allRec$ = this.http.get(
      `https://648a951717f1536d65e94e9e.mockapi.io/recieps`
    );

    this.searchForm
      .get('searchField')
      ?.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),

        switchMap((val) => this.search(val as string))
      )
      .subscribe((val: any) => {
        this.show = true;
        this.reciepes = val;
        //console.log(this.reciepes.length);
        if (this.reciepes.length == 0) {
          this.length = !this.length;
        } else {
          this.length = false;
        }
        //  console.log(val);
        //  console.log(this.reciepes);
      });
  }

  search(receipe: string) {
    return this.http.get(
      // `https://648a951717f1536d65e94e9e.mockapi.io/receipes?ingredients=${receipe}`

      ` https://648a951717f1536d65e94e9e.mockapi.io/recieps?ingredients=${receipe}`
    );
  }
  addToFav(val: any) {
    console.log(this.rec.Fav.indexOf(val));
    this.rec.addToFav(val);
  }

  deleteReciepe(id: string) {
    console.log('In delete', id);
    // this.allRec$ = this.rec.delete(id).subscribe(() => {
    //   this.http
    //     .get(`https://648a951717f1536d65e94e9e.mockapi.io/recieps`)
    //     .subscribe((val) => {
    //       //this.allRec = val;
    //     });
    // });
    // this.allRec$ = this.rec.delete(id).subscribe();
    this.rec.delete(id).subscribe(() => {
      this.allRec$ = this.rec.get();
    });
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {
  title = 'rproject';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  searchForm = this.fb.group({
    searchField: [''],
  });

  reciepes: any;

  show = false;
  allRec: any;
  ngOnInit() {
    this.http
      .get(`https://648a951717f1536d65e94e9e.mockapi.io/recieps`)
      .subscribe((val) => {
        this.allRec = val;
      });
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
        console.log(val);
        console.log(this.reciepes);
      });
  }

  search(receipe: string) {
    return this.http.get(
      // `https://648a951717f1536d65e94e9e.mockapi.io/receipes?ingredients=${receipe}`

      ` https://648a951717f1536d65e94e9e.mockapi.io/recieps?ingredients=${receipe}`
    );
  }
}

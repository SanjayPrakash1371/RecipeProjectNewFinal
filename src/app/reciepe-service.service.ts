import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  imglink: string;
  instructions: string;
  servingsize: number;
  preptime: number;
}
@Injectable({
  providedIn: 'root',
})
export class ReciepeServiceService {
  constructor(private http: HttpClient) {}

  Fav: Recipe[] = [];

  addToFav(val: Recipe) {
    let index = this.Fav.indexOf(val);
    let check = false;
    for (let i = 0; i < this.Fav.length; i++) {
      // console.log(this.Fav[i].id);
      if (this.Fav[i].id == val.id) {
        check = true;
      }
    }
    if (!check) {
      this.Fav.push(val);
    } else {
      alert('Already in Favorites');
    }

    console.log(val);
  }

  get() {
    return this.http
      .get(`https://648a951717f1536d65e94e9e.mockapi.io/recieps/`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }

  addNewRecipe(formGroup: FormGroup) {
    return this.http
      .post(
        `https://648a951717f1536d65e94e9e.mockapi.io/recieps/`,
        formGroup.value
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          return [];
        })
      );
  }
  getReciepeById(id: string) {
    return this.http
      .get(`https://648a951717f1536d65e94e9e.mockapi.io/recieps/${id}`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
  updateRecipe(id: string, formGroup: FormGroup) {
    console.log('In updating', formGroup.value);

    console.log(formGroup);

    return this.http
      .put(
        `https://648a951717f1536d65e94e9e.mockapi.io/recieps/${id}`,
        formGroup.value
      )
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
  delete(id: string) {
    return this.http
      .delete(`https://648a951717f1536d65e94e9e.mockapi.io/recieps/${id}`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
}

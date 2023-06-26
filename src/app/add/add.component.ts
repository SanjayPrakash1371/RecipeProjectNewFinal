import { Component } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReciepeServiceService } from '../reciepe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  constructor(
    private fb: FormBuilder,
    private reciepeService: ReciepeServiceService,
    private router: Router
  ) {}
  urlregex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  recipeForm = this.fb.group({
    name: ['', Validators.required],
    imglink: ['', [Validators.required, , Validators.pattern(this.urlregex)]],

    instructions: ['', [Validators.required]],
    servingssize: ['2', [Validators.required]],
    preptime: ['', [Validators.required]],
    ingredients: new FormArray([]),
  });

  onSubmit() {
    console.log(this.recipeForm.value);
    let newRecipe = this.recipeForm;

    this.reciepeService.addNewRecipe(newRecipe as any).subscribe((val) => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.recipeForm.get('ingredients')).push(control);
  }

  addIngredients() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.recipeForm.get('ingredients')).push(control);
  }
  removeIngredient(index: number) {
    if (index == 0) {
      alert('Add atleast one ingrediants');
      return;
    }
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  get name() {
    return this.recipeForm.get('name');
  }
  get imglink() {
    return this.recipeForm.get('imglink');
  }
  get instructions() {
    return this.recipeForm.get('instructions');
  }
  get servingsize() {
    return this.recipeForm.get('servingsize');
  }
  get preptime() {
    return this.recipeForm.get('preptime');
  }
  get ingredientsControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}

import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReciepeServiceService } from '../reciepe-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editreciepe',
  templateUrl: './editreciepe.component.html',
  styleUrls: ['./editreciepe.component.scss'],
})
export class EditreciepeComponent {
  constructor(
    private fb: FormBuilder,
    private reciepeService: ReciepeServiceService,
    private router: Router,
    private arouter: ActivatedRoute
  ) {}

  urlregex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  recipeEditedForm = this.fb.group({
    name: ['', Validators.required],
    imglink: ['', [Validators.required, , Validators.pattern(this.urlregex)]],

    instructions: ['', [Validators.required]],
    servingssize: ['2', [Validators.required]],
    preptime: ['', [Validators.required]],
    ingredients: new FormArray([]),
  });

  id: string = '';
  ngOnInit() {
    this.arouter.paramMap.subscribe((router) => {
      let reciepeId = router.get('id');

      this.reciepeService
        .getReciepeById(reciepeId as string)
        .subscribe((val: any) => {
          console.log(val);
          this.id = val.id;

          this.recipeEditedForm.patchValue(val);

         // console.log(this.recipeEditedForm.get('ingredients')?.value.length);
        });
    });

    const control = new FormControl('', Validators.required);
    (<FormArray>this.recipeEditedForm.get('ingredients')).push(control);
  }
  onSubmit() {
    this.reciepeService
      .updateRecipe(this.id, this.recipeEditedForm)
      .subscribe((val) => {
        this.router.navigate(['/']);
      });
  }

  addIngredients() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.recipeEditedForm.get('ingredients')).push(control);
  }
  removeIngredient(index: number) {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.recipeEditedForm.get('ingredients')).removeAt(index);
  }

  get name() {
    return this.recipeEditedForm.get('name');
  }
  get imglink() {
    return this.recipeEditedForm.get('imglink');
  }
  get instructions() {
    return this.recipeEditedForm.get('instructions');
  }
  get servingsize() {
    return this.recipeEditedForm.get('servingsize');
  }
  get preptime() {
    return this.recipeEditedForm.get('preptime');
  }
  get ingredientsControls() {
    return (<FormArray>this.recipeEditedForm.get('ingredients')).controls;
  }
}

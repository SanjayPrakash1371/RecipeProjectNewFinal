import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss'],
})
export class RecipecardComponent {
  @Input() recipe = {
    id: '99',
    name: 'tomato rice',
    ingredients: 'tomato,rice',
    imglink:
      'https://th.bing.com/th/id/R.b483a4b2a3ec58248e3045322615ff9a?rik=C%2fzjZRLzn87svg&riu=http%3a%2f%2fonedaycart.com%2fodcb%2fwp-content%2fuploads%2f2016%2f04%2fmaxresdefault1.jpg&ehk=2p0ZrfvEsujXDC35DaO5wmb3qPgBGimBrWk68DL%2bYg8%3d&risl=&pid=ImgRaw&r=0',
    instructions:
      'Wash and drain the basmati rice and soak for about 20 minutes. Take a deep pan, put it on medium flame and pour water into it. Bring it to a boil, and then add the soaked rice. Cover the pan with a lid and cook on medium flame till the rice becomes soft, but not mushy',
    servingsize: 2,
    preptime: 30,
  };
  constructor(private router: Router) {}

  details(id: string) {
    console.log(id);
    this.router.navigate([`/recipe/${id}`]);
  }
}

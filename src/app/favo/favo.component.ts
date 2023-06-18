import { Component } from '@angular/core';
import { ReciepeServiceService } from '../reciepe-service.service';

@Component({
  selector: 'app-favo',
  templateUrl: './favo.component.html',
  styleUrls: ['./favo.component.scss'],
})
export class FavoComponent {
  constructor(private rec: ReciepeServiceService) {}
  all = this.rec.Fav;
}

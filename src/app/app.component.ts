import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]
})
export class AppComponent {
  title = 'cleandashboard';
  choiceSelected = 'main'
  places : {name:string, status: string, code: string}[] = [];

  constructor(private dataService: DataService) {
    
  }
  
  onSelect(choice: string) {
    this.choiceSelected = choice;
    console.log(choice);

  }

  ngOnInit() {
    this.places = this.dataService.places;
    
  }


}

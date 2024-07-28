import { Component, ViewChild, ElementRef} from "@angular/core";
import { DataService } from "../data.service";

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrl: './places.component.css',
    providers: [DataService]
})
export class PlacesComponent {

  mode: string = 'show';
  places: {name:string, status: string, code:string }[] = [];

  @ViewChild('placeNameSearchInput')
  placeNameSearchInputRef!: ElementRef;
 
  constructor( private dataService: DataService ) {
    
  }

  ngOnInit() {
    this.places = this.dataService.places;
  }

  onClickPlace(event: any ) {
    console.log(event);
    console.log(event.target.getAttribute('data-code'));
  }

  onClickAddPlace() {
    console.log('add place');
    this.mode = "edit";

  }

  onSearch() {
    const placeName = this.placeNameSearchInputRef.nativeElement.value;


    console.log('search:' + placeName);
  }

  onPlaceSubmitted(submitted: any) {

    console.log('place submittes' + submitted);

  }

  onCancelSubmit( mode: string) {
    this.mode = mode;
    
  }
}
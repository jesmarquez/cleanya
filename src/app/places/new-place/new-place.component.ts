import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
    selector: 'app-new-place',
    templateUrl: './new-place.component.html',
    styleUrl: './new-place.component.css'
})
export class NewPlaceComponent implements OnInit{
  places: {name: string, status: string, code: string}[] =[];

  @ViewChild('placeNameInput') 
  placeNameInputRef!: ElementRef;

  @ViewChild('placeCodeInput')
  placeCodeInputRef!: ElementRef;

  @ViewChild('placeLocationInput') 
  placeLocationRef!: ElementRef;

  @Output() placeSubmitted = new EventEmitter<number>();
  @Output() cancelSubmit= new EventEmitter<string>();


  constructor(private dataService: DataService) {

  }

  ngOnInit () {
    this.places = this.dataService.places;

  }

  onSubmitPlace() {

    const placeName = this.placeNameInputRef.nativeElement.value;
    const placeCode = this.placeCodeInputRef.nativeElement.value;
    const placeLocation = this.placeLocationRef.nativeElement.value;


    this.dataService.addPlace(placeName, placeCode, placeLocation, "clean");

    this.placeSubmitted.emit(80);

    console.log('submit place :' + placeName + " code:" + placeCode);
    console.log(this.dataService.places);
  }

  onCancelPlace() {
    this.cancelSubmit.emit("show");
  }
}



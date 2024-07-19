export class DataService {

  places = [
    {
      name: "WASHROOM 1",
      status: "clean",
      code: "UI-100"
    },
    {
      name: "BREAKROOM 3",
      status: "no-clean",
      code: "JK-654"
    }
  ]

  addPlace(name: string, status: string, code: string) {
    this.places.push({ name: name, status: status, code: code});

  }
}
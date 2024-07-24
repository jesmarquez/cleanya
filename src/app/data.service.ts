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
    },
    {
      name: "BREAKROOM 1",
      status: "no-clean",
      code: "OP-008"
    },
    {
      name: "stair 12",
      status: "no-clean",
      code: "MJ-OP2"
    },
    {
      name: "Door 9",
      status: "no-clean",
      code: "WQ-90"
    }
  ]

  addPlace(name: string, status: string, code: string) {
    this.places.push({ name: name, status: status, code: code});

  }
}
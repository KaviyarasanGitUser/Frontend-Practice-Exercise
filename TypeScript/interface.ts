interface Calender{
    name: string
    addEvent(): void;
    removeEvent(): void;
}

class GoogleCalender implements Calender{
    constructor(public name: string){}

    addEvent(): void {
        console.log('Adding a event');
        
    }

    removeEvent(): void {
        console.log('Removing a event');
        
    }
}

let gCalender = new GoogleCalender('G')
gCalender.addEvent();
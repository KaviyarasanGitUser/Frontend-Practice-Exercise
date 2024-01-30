"use strict";
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log('Adding a event');
    }
    removeEvent() {
        console.log('Removing a event');
    }
}
let gCalender = new GoogleCalender('G');
gCalender.addEvent();

import { Component, OnInit } from '@angular/core';
import { Appointment } from './models/appointment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date;
  appointments: Appointment[] =[];
  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments):[]
  }
  nextId: number = 1;
  addAppointment (){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment ={
        id: this.nextId++, 
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
  }
  deleteAppointment(id:number){
    this.appointments = this.appointments.filter(appointment => appointment.id !== id);
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
}

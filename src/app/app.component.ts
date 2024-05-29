import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  profile = {
    image: 'assets/PP-FS.jpeg',
    name: 'Fatima Safdar',
    title: 'Quality Engineer, Data Analyst, .Net Full Stack Developer'
  };

  description = 'Quality Engineer, Data Analyst, .Net Full Stack Developer';
  basicInfo = {
    age: 30,
    email: 'safdar.fatima1993@gmail.com',
    phone: '+1-647-229-0606',
    address: 'Toronto, Ontario, Canada',
    language: 'English, Urdu'
  };

  handleFormSubmission(data: any) {
    console.log('Form Submitted:', data);
    // Handle the form submission logic here
  }
}

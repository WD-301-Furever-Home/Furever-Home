import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatToolbarModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contact = {
        name: '',
        email: '',
        message: ''
    };
    responseMessage = '';
    scriptUrl = 'https://script.google.com/macros/s/AKfycbwoYU3IGaWU-448UE8xzixgroJXsKA2PzlBdhxvwtyXUASAuO2Q4YjYyXHpG4fZpVgI/exec';

    constructor(private http: HttpClient) {}

    onSubmit() {
      console.log('Submitting form:', this.contact); 
      this.http.post(this.scriptUrl, this.contact).subscribe(
        (response: any) => {
          console.log('Response:', response);
          if (response.result === 'success') {
            this.responseMessage = 'Message sent successfully!';
            this.contact = { name: '', email: '', message: '' }; 
          } else {
            this.responseMessage = 'Error: ' + response.error;
          }
        },
        (error) => {
          console.error('Error:', error);
          this.responseMessage = 'Error connecting to server. Please try again later.';
        }
      );
    }
}

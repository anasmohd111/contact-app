import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContactSchema } from 'src/model/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  allGroups: any = {}
  contact: ContactSchema = {}

  constructor(private editRoute: ActivatedRoute, private api: ApiService, private navigate: Router) { }

  ngOnInit(): void {

    // get parameter from url
    this.editRoute.params.subscribe({
      next: (parameter: any) => {

        // destructure
        const { id } = parameter
        console.log(id);

        // make a call to service to get contact
        this.api.viewContact(id).subscribe({
          next: (res: any) => {
            console.log(res);
            this.contact = res

          }
        })

        // make a call to service to get all groups
        this.api.getGroups().subscribe({
          next: (res: any) => {
            console.log(res);
            this.allGroups = res

          }
        })

      }
    })

  }

  // make a call to service
  updateContact(id: any, contact: any) {


    this.api.editContact(id, contact).subscribe({
      next: (res: any) => {

        alert("Successfully updated")
        this.navigate.navigateByUrl('')

      }
    })

  }

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactSchema } from 'src/model/contactSchema';

@Injectable({
  providedIn: 'root'
})

// rxjs is a library. it is an extension for js. it handle one or more apis at a time. it means reactive extension for js

export class ApiService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {

    let errorMsg: string = ''

    if (error.error) {
      // client error
      errorMsg = `Error : ${error.message}`
    }
    else {
      errorMsg = `Status : ${error.status}
      Error : ${error.message}`
    }

  }

  // create a function
  getAllContact() {

    // api call to the url:http://localhost:3000/contacts req:get

    return this.http.get(`${this.BASE_URL}/contacts`)

  }

  // view contact
  viewContact(id: any) {

    return this.http.get(`${this.BASE_URL}/contacts/${id}`)

  }

  //api call for getting a particluar group
  getGroup(id: any) {

    return this.http.get(`${this.BASE_URL}/groups/${id}`)

  }

  // get all group
  getGroups() {

    return this.http.get(`${this.BASE_URL}/groups`)

  }

  // add contact
  addContact(contact: ContactSchema) {

    return this.http.post(`${this.BASE_URL}/contacts`, contact)

  }

  // delete a perticular card
  deleteContact(id: any) {

    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)

  }

  // edit contact
  editContact(id: any, body: ContactSchema) {

    return this.http.put(`${this.BASE_URL}/contacts/${id}`, body)

  }


}

import { Injectable, Input } from "@angular/core";
import { concat, Observable } from "rxjs";
import { ContactList, Contacts, RequestUpdate, ResponseUpdate } from "./people.module";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class PeopleService{
  private url = "http://localhost:3000/contacts/";

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(this.url);
  }

  addPeople(contact: Contacts) {
    return this.http.post(this.url, contact);
  }

  deletePeople(id: any){
    return this.http.delete(this.url + id);
  }

  getOneContact(id: any){
    return this.http.get(this.url + id);
  }

  editPeople(id: any, contact: ResponseUpdate){
    console.log(this.url + id, contact)
    return this.http.put(this.url + id, contact);
  }

}

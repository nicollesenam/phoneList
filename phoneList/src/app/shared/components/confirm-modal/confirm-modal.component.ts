import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ContactList, Contacts, RequestUpdate, ResponseUpdate } from '../people/people.module';
import { map, filter } from 'rxjs/operators';

import { PeopleService } from '../people/people.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  contacts: any =  {
      nome: '',
      telefone: '',
      endereco: '',
      dataNascimento: ''
  }

  contact: any;

  constructor(private peopleService: PeopleService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  // getAllContacts(){
  //   this.peopleService.getPeople()
  //   .subscribe(el =>
  //     this.contact = el
  //   );
  // }

  closeModal(){
    this.modalService.dismissAll();
  }

  addContact(contact: Contacts) {
    this.peopleService.addPeople(contact)
      .subscribe(async (res) => {
        console.log(res);
        this.contact = res
      })
  }
}

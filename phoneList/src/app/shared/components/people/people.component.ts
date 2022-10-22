import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentRef } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { lastValueFrom } from 'rxjs';
import {  ContactList, Contacts, } from './people.module';
import { PeopleService } from './people.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PeopleComponent implements OnInit {
  contactList: any;
  contacts: Contacts

  constructor(private peopleService: PeopleService, private modalService: NgbModal) { }

  public async ngOnInit(): Promise<void> {
    this.getAllContacts();
    // const p = {
    // nome: '',
    // endereco: '',
    // telefone: '',
    // dataNascimento: ''
    // }
    // const {nome, endereco, telefone, dataNascimento} = p
  }
  // async getAllContacts(){
  // (await this.peopleService.getPeople())
  // .subscribe(el => {
  // this.contactList = el;
  // });
  // }
  // async getAllContacts() {
  //   const categories$ = this.peopleService.getPeople();
  //   this.contactList = await lastValueFrom(await categories$);
  // }

  getAllContacts(){
    this.peopleService.getPeople()
    .subscribe(el =>
      this.contactList = el
    );
  }

  resetValue() {
    this.contacts.nome = '',
      this.contacts.endereco = '',
      this.contacts.telefone = '',
      this.contacts.dataNascimento = ''
  }

  setValue(contacts: Contacts) {
    this.contacts.nome = contacts.nome,
      this.contacts.endereco = contacts.endereco,
      this.contacts.telefone = contacts.telefone,
      this.contacts.dataNascimento = contacts.dataNascimento
  }

  onSubmit() {
    this.modalService.dismissAll();
    console.log("res:", this.getAllContacts());
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, {
      centered: true
    });
  }

  getOneContact(id: any) {
    console.log(id)
  }

  refresh(){
    this.peopleService.getPeople()
    .subscribe(el =>
      this.contactList = el
    );
  }

  editContact(id: any, contacts: Contacts) {
    this.peopleService.editPeople(id, contacts)
      .subscribe((el) => {
        console.log(el)
        this.refresh();
    })
    this.getAllContacts();
  }

  removeContact(id: any) {
    console.log(this.contactList);
    this.peopleService.deletePeople(id)
      .subscribe(res => {
        this.getAllContacts();
        console.log(res)
      });
    this.getAllContacts();
  }
}

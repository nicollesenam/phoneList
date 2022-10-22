export interface Contacts {
    id: number;
    nome: string;
    telefone: string;
    endereco: string;
    dataNascimento: string;
}

export interface ContactList {
    contacts: Contacts[];
}

export interface RequestUpdate {
  nome: string;
  telefone: string;
  endereco: string;
  dataNascimento: string;
}

export interface ResponseUpdate{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
  dataNascimento: string;
}

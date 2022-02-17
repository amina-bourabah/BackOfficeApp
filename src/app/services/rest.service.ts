import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Transferts } from '../models/transferts';
import { Observable } from 'rxjs';
import { ObjetTransfert } from '../models/objet-transfert';
import { Client } from '../models/client';
import { Agent } from '../models/agent';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  url:   string = "http://localhost:3000/services";
  url_1: string = "https://ms-transfert-nationale.herokuapp.com/transactions";
  url_2: string=   "https://ms-transfert-nationale.herokuapp.com/comptes";
  url_3: string=   "https://transfert-users-microservice.herokuapp.com/client";
  url_4: string=   "https://transfert-users-microservice.herokuapp.com/agent";;



 
  getTransferts()
  {

   return this.http.get<Transferts[]>(`${this.url_1}`);

  }


 
  effectuertransfert(transfert: ObjetTransfert): Observable<Object> 
  {
    return this.http.post(`${this.url_1}`, transfert);
  }


  getClientById(code:number): Observable<Client[]>
  {
    return this.http.get<Client[]>(`${this.url_3+'?id='+code}`);
  }

  createClient(client: Client): Observable<Object> 
  {
    return this.http.post(`${this.url_3}`, client);
  }

  createAgent(agent: Agent): Observable<Object> 
  {
    return this.http.post(`${this.url_4}`, agent);
  }

  updateClient(id: string, client: Client): Observable<Object> {
    return this.http.put(`${this.url_3}/${id}`, client);
  }

  getClients()
  {
    return this.http.get<Client[]>(this.url_3);
  }

  getAgents()
  {
    return this.http.get<Agent[]>(this.url_4);
  }

  updateAgent(id: string, agent: Agent): Observable<Object> {
    return this.http.put(`${this.url_4}/${id}`, agent);
  }

}

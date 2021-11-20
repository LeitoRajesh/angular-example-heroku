import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Holder} from "../model/holder";
import {environment} from "../../../environments/environment";
import {BaseService} from "./BaseService";

@Injectable()
export class HolderService extends BaseService{

  constructor(private http: HttpClient) {
    super();
  }

  // extrarir a url para variavel de ambiente sff
  getListagem(){
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    // @ts-ignore
    return this.http.get<Holder[]>(environment.url,{observe: "response"});
  }

  // implementar catch error
  deleteItem(id: number){
    return this.http.delete(`${environment.url}/${id}`, {observe: 'response'});
  }

  // criar method headers common
  salveItem(holder: Holder | undefined){
    return this.http.post(environment.url, {
              method: 'POST',
              body: holder,
              headers: this.getHeaders()
              }, {observe: 'response'});
  }

  // utilizar aspas simples para variavel pro exemplo ${id}
  updateItem(holder: Holder | undefined){
    // @ts-ignore
    return this.http.post(`${environment.url}/${holder?.id}`, {
            method: 'PUT',
            body: holder,
            headers: this.getHeaders()
            },{observe: 'response'});
  }
}

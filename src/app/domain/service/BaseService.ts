import {IBaseService} from "./IBaseService";
import {HttpHeaders} from "@angular/common/http";


export abstract class BaseService implements IBaseService{
  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    headers = headers.append('charset', 'UTF-8')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    return headers;
  }
}

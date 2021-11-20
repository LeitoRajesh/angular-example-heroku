import {HttpHeaders} from "@angular/common/http";


export interface IBaseService{
  getHeaders(): HttpHeaders;
}

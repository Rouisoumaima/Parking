import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL ="http://localhost:8380/SpringMvc/parkings/";


@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private Http : HttpClient) {

  }

  create(parking:any): Observable<any>{

    return this.Http.post(API_URL+"add-parking", parking);

  }

  get():Observable<any>{

    return this.Http.get(API_URL+"retrieve-allParkings");

  }

  delete(id:number) : Observable<any>{

    return this.Http.delete(API_URL+"delete-parking/"+id)

  }

  modify(parking:any) : Observable<any>{

    return this.Http.put(API_URL+"modify-parking", parking);

  }

}

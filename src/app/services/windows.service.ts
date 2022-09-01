import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Window } from '../models/window.model';
import { Observable } from 'rxjs';
import { WindowToCreate } from '../models/windowToCreate.model';
import { WindowToUpdate } from '../models/windowToUpdate.model';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllWindows(): Observable<Window[]> {
    return this.http.get<Window[]>(this.baseApiUrl + '/api/window/getallwindows');
  }

  createWindow(createWindowRequest: WindowToCreate): Observable<Window> {
    return this.http.post<Window>(this.baseApiUrl + '/api/window/createwindow', createWindowRequest);
  }

  getWindow(id: number): Observable<Window> {
    return this.http.get<Window>(this.baseApiUrl + '/api/window/getwindowbyid/' + id);
  }

  updateWindow(id: number, windowUpdateRequest: WindowToUpdate): Observable<Window> {
    return this.http.put<Window>(this.baseApiUrl + '/api/window/updatewindow/' + id, windowUpdateRequest)
  }

  deleteWindow(id: number): Observable<Window> {
    return this.http.delete<Window>(this.baseApiUrl + '/api/window/deletewindow/' + id)
  }

  public getClaims = (route: string) => {
    return this.http.get(this.baseApiUrl + route);
  }
}

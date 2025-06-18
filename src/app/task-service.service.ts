import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {


  private userUrl = 'http://localhost:8080/api/user/tasks';

  constructor(private http: HttpClient) { }

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.userUrl);
  }

  createTask(task: Task) : Observable<Object> {
    return this.http.post(this.userUrl, task);
  }

  getTaskById(id :number) : Observable<Task> {
    return this.http.get<Task>(`${this.userUrl}/${id}`);
  }

  updateTask(id :number, task: Task) : Observable<Object>{
    return this,this.http.put(`${this.userUrl}/${id}`, task);
  }

  deleteTask(id: number) : Observable<Object>{
    return this.http.delete(`${this.userUrl}/${id}`);
  }
 }

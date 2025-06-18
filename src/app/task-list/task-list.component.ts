import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule, UpdateTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks:Task[];

  constructor (private taskService: TaskServiceService, 
    private router : Router
  ) {
    this.tasks = [];
  }

  ngOnInit(): void {
    this.getTasks();
  }
  
  private getTasks(){
  
    this.taskService.getAllTask().subscribe(data => {
      this.tasks = data;
    })
  }
    updateTask(id: number) {
      this.router.navigate(['update-task', id]);
  }

    deleteTask(id:number) {
      this.taskService.deleteTask(id).subscribe(data => {
        console.log(data);
        this.getTasks();
      })
    }

    viewDetails(id: number){
      this.router.navigate(['task-details', id]);
    }

}
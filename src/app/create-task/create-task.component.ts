import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit {
  
  
  task: Task = {
    status: '',
    id: 0,
    title: '',
    description: ''
  };

  constructor (private taskService: TaskServiceService,
    private router: Router) {}

  ngOnInit(): void {}

  saveTask() {
    this.taskService.createTask(this.task).subscribe(data =>{
      console.log(data);
      this.gotoTaskList();
    })
  }

  gotoTaskList() {
    this.router.navigate(['/tasks']);
  }

  onSubmit() {
    console.log('Succesfully create',this.task)
    this.saveTask();
    }
 }



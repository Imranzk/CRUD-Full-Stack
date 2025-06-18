import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {

  id: number=0;
  tasks: Task = new Task(0, '', '', '');
  constructor (private route : ActivatedRoute, private taskService: TaskServiceService) {

  }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.tasks = new Task(0, '', '', '');
      this.taskService.getTaskById(this.id).subscribe (data=>{
        this.tasks = data;
      })

  }

}

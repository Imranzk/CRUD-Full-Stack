import { Component } from '@angular/core';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {

  id: number=0;
  task: Task = new Task(0, '', '', '');

  constructor (private taskService: TaskServiceService,
    private routers: ActivatedRoute,
  private router:Router) {}

  ngOnInit(): void {
    this.id= this.routers.snapshot.params['id'];
    this.taskService.getTaskById(this.id).subscribe(data => {
      this.task = data
    });
  }

  gotoTaskList() {
    this.router.navigate(['/tasks']);
  }

  onSubmit() {
    this.taskService.updateTask(this.id, this.task).subscribe( data =>{
      this.gotoTaskList();
    })
    }

    

}

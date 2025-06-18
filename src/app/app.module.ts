import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { UpdateTaskComponent } from "./update-task/update-task.component";

@NgModule({
    declarations: [],

    imports: [
        BrowserModule,
        AppRoutingModule,
        CreateTaskComponent,
        TaskListComponent,
        UpdateTaskComponent
        
    ],

    providers: [],

    bootstrap: []
})

export class AppModule {}
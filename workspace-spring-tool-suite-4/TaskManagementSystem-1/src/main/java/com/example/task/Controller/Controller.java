package com.example.task.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.task.Exception.ResourceNotFoundException;
import com.example.task.Repository.TaskRepository;
import com.example.task.model.Task;

@RestController
@RequestMapping("/api/user/")
public class Controller {
	
	@Autowired
	private TaskRepository taskRepository;
	
	// get all tasks
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/tasks")
	public List<Task> getAllTasks() {
		return (List<Task>) taskRepository.findAll();
	}
	
	///@PostMapping("/tasks")
	///void addTask(@RequestBody Task task) {
		////taskRepository.save(task);
	////}
	
	// create tasks rest api
	
	@PostMapping("/tasks")
	public Task createTask(@RequestBody Task task) {
		return taskRepository.save(task);
	}
	
	// get task by id rest api
	@GetMapping("/tasks/{id}")
	public ResponseEntity<Task>getTaskById(@PathVariable Long id) {
			Task task = taskRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Task is bot exist wirh id:" + id));
		return ResponseEntity.ok(task);
	}
	
	//update task rest api
	
	@PutMapping("/tasks/{id}")
	public ResponseEntity<Task>updateTask(@PathVariable Long id,@RequestBody Task taskDetails) {
		Task task = taskRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Task is not exist with id:" +id));
		
		task.setTitle(taskDetails.getTitle());
		task.setDescription(taskDetails.getDescription());
		task.setStatus(taskDetails.getStatus());
		
	Task updatedTask=taskRepository.save(task);
	return ResponseEntity.ok(updatedTask);
	
	}
	
	//delete task rest api
	
	@DeleteMapping("/tasks/{id}")
	public ResponseEntity<Map<String, Boolean>>deleteTask(@PathVariable Long id) {
		
		Task task = taskRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Task is not exist with id:" +id));
		taskRepository.delete(task);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}
}


	


	


package com.example.task.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.task.model.Task;

@Repository

public interface TaskRepository extends JpaRepository<Task, Long> {

}

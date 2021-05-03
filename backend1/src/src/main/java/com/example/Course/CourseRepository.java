package com.example.Course;

import org.springframework.data.repository.CrudRepository;
import java.util.ArrayList;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import com.example.People.People;
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface CourseRepository extends CrudRepository<Course, Long> {
	List<Course> findByPeopleOrderByName(People people);
}
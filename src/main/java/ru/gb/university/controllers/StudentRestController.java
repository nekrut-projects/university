package ru.gb.university.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.gb.university.exceptions.ResourceNotFoundException;
import ru.gb.university.model.Student;
import ru.gb.university.services.StudentService;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentRestController {
    private final StudentService studentService;

    @GetMapping
    public List<Student> getAll(){
        return studentService.findAll();
    }

    @GetMapping("/{id}/info")
    public Student get(@PathVariable(name = "id") Long id){
        return studentService.get(id).orElseThrow(() -> new ResourceNotFoundException("student not found by id: " + id));
    }

    @PostMapping
    public void add(@RequestParam(name = "name") String name,
                      @RequestParam(name = "age") int age){
        studentService.add(name, age);
    }

    @PutMapping("/name/{id}")
    public void updateName(@RequestParam String name, @PathVariable Long id){
        studentService.updateName(id, name);
    }

    @PutMapping("/age/{id}")
    public void updateAge(@RequestParam(name = "age") int age, @PathVariable Long id){
        studentService.updateAge(id, age);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        studentService.delete(id);
    }
}

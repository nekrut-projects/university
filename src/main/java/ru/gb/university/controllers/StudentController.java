package ru.gb.university.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.gb.university.exceptions.ResourceNotFoundException;
import ru.gb.university.model.Student;
import ru.gb.university.services.StudentService;

import java.util.List;

@Controller
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {
    private final StudentService studentService;

    @GetMapping
    public String getAll(Model model){
        List students = studentService.findAll();
        model.addAttribute("students", students);
        return "students";
    }

    @GetMapping("/{id}/info")
    public String get(Model model, @PathVariable(name = "id") Long id){
        Student student = studentService.get(id).orElseThrow(() -> new ResourceNotFoundException("student not found by id: " + id));
        model.addAttribute("student", student);
        return "student_info";
    }

    @PostMapping("/add")
    public String add(@RequestParam(name = "name") String name,
                      @RequestParam(name = "age") int age){
        studentService.add(name, age);
        return "redirect:/students";
    }

    @PostMapping("/update/name/{id}")
    public String updateName(@RequestParam(name = "name") String name, @PathVariable Long id){
        studentService.updateName(id, name);
        return "redirect:/students/" + id + "/info";
    }

    @PostMapping("/update/age/{id}")
    public String updateAge(@RequestParam(name = "age") int age, @PathVariable Long id){
        studentService.updateAge(id, age);
        return "redirect:/students/" + id + "/info";
    }

    @GetMapping("/del/{id}")
    public String delete(@PathVariable("id") Long id) {
        studentService.delete(id);
        return "redirect:/students";
    }

}

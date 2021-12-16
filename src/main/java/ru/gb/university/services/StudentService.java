package ru.gb.university.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.gb.university.model.Student;
import ru.gb.university.repositories.StudentRepository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public List<Student> findAll() {
        return Collections.unmodifiableList(studentRepository.findAll());
    }

    public void add(String name, int age) {
        studentRepository.save(new Student(name, age));
    }

    public Optional<Student> get(Long id) {
        return studentRepository.findById(id);
    }

    @Transactional
    public void delete(Long id) {
        studentRepository.deleteById(id);
    }

    public void updateName(Long id, String name) {
        studentRepository.updateName(id, name);
    }

    public void updateAge(Long id, int age) {
        studentRepository.updateAge(id, age);
    }
}

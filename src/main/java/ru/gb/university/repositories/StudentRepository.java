package ru.gb.university.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import ru.gb.university.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    @Modifying
    @Transactional
    @Query("Update Student s Set s.name = :name Where s.id = :id")
    void updateName(@Param("id") Long id, @Param("name") String name);

    @Modifying
    @Transactional
    @Query("Update Student s Set s.age = :age Where s.id = :id")
    void updateAge(@Param("id") Long id, @Param("age") int age);
}

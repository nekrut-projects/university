package ru.gb.university.exceptions;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class UniversityError {
    private List<String> messages;
    private Date timestamp;

    public UniversityError(String message) {
        this(Arrays.asList(message));
    }

    public UniversityError(String... messages) {
        this(Arrays.asList(messages));
    }

    public UniversityError(List<String> messages) {
        this.messages = new ArrayList<>(messages);
        this.timestamp = new Date();
    }
}

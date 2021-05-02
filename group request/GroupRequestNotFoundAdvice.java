package com.example.People;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
class GroupRequestNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(GroupRequestNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String GroupRequestNotFoundHandler(GroupRequestNotFoundException ex) {
        return ex.getMessage();
    }
}
package com.example.People;

class GroupRequestNotFoundException extends RuntimeException {

    GroupRequestNotFoundException(Long id) {
        super("Could not find request " + id);
    }
}

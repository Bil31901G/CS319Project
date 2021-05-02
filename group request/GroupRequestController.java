package com.example.People;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class GroupRequestController {

    private final GroupRequestRepository repository;

    GroupRequestController(GroupRequestRepository repository) {
        this.repository = repository;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/groupRequest")
    List<GroupRequest> all() {
        return repository.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/groupRequest")
    GroupRequest newRequest(@RequestBody GroupRequest newRequest) {
        return repository.save(newRequest);
    }

    // Single item

    //Requests of a group
    @GetMapping("/groupfindrequest/{group}")
    List<GroupRequest> getRequestsOfGroup(@PathVariable Group group){
        return repository.findByGroupOrderByDate(group);
    }

    //Requests of a student
    @GetMapping("/studentfindrequest/{student}")
    List<GroupRequest> getRequestsOfStudent(@PathVariable Student student){
        return repository.findByStudentOrderByDate(student);
    }

    @GetMapping("/groupRequest/{id}")
    GroupRequest one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new GroupRequestNotFoundException(id));
    }

    @PutMapping("/groupRequest/{id}")
    GroupRequest replaceRequest(@RequestBody GroupRequest newRequest, @PathVariable Long id) {

        return repository.findById(id)
                .map(request -> {
                    request.setSender(newRequest.getSender());
                    request.setText(newRequest.getText());
                    request.setStatus(newRequest.getStatus());
                    request.setDate(newRequest.getDate());
                    return repository.save(request);
                })
                .orElseGet(() -> {
                    newRequest.setId(id);
                    return repository.save(newRequest);
                });
    }

    @DeleteMapping("/groupRequest/{id}")
    void deleteRequest(@PathVariable Long id) {
        repository.deleteById(id);
    }
}

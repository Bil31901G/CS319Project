package ezgi.project;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class AllGroupsController {

    private final AllGroupsRepository repository;

    AllGroupsController(AllGroupsRepository repository) {
        this.repository = repository;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/allGroups")
    List<Group> displayGroups() {
        return repository.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/allGroups")
    Group addGroup(@RequestBody Group newGroup) {
        return repository.save(newGroup);
    }

    // Single item

    @GetMapping("/allGroups/{id}")
    Group displayGroup(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new GroupNotFoundException(id));
    }

    @PutMapping("/allGroups/{id}")
    Group replaceGroup(@RequestBody Group newGroup, @PathVariable Long id) {

        return repository.findById(id)
                .map(group -> {
                    group.setName(newGroup.getName());
                    group.setGroupNo(newGroup.getGroupNo());
                    group.setGroupGrade(newGroup.getGroupGrade());
                    group.setAllPeople(newGroup.getAllPeople());
                    group.setGroupTasks(newGroup.getGroupTasks());
                    return repository.save(group);
                })
                .orElseGet(() -> {
                    newGroup.setId(id);
                    return repository.save(newGroup);
                });
    }

    @DeleteMapping("/allGroups/{id}")
    void removeGroup(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
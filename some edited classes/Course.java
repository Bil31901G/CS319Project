package ezgi.project;

import java.util.Objects;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
class Course {

    private @Id @GeneratedValue Long id;
    private String name;
    private Integer courseNo;
    private @OneToMany List<Group> allGroups;
    private @OneToMany List<People> allPeople;
    //private @OneToMany List<Assignment> allAssignments;
    private @OneToMany List<Task> courseTasks;

    public Course() {}

    public Course(String name, Integer courseNo) {
        this.name = name;
        this.courseNo = courseNo;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public Integer getCourseNo() {
        return this.courseNo;
    }

    public List<Group> getAllGroups() {
        return this.allGroups;
    }

    public List<People> getAllPeople() {
        return this.allPeople;
    }

    //public List<Assignment> getAllAssignments() {
    //    return this.allAssignments;
    //}

    public List<Task> getCourseTasks() {
        return courseTasks;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCourseNo(Integer courseNo) {
        this.courseNo = courseNo;
    }

    public void setAllGroups(List<Group> allGroups) {
        this.allGroups = allGroups;
    }

    public void setAllPeople(List<People> allPeople) {
        this.allPeople = allPeople;
    }

    //public void setAllAssignments(List<Assignment> allAssignments) {
    //    this.allAssignments = allAssignments;
    //}

    public void setCourseTasks(List<Task> courseTasks) {
        this.courseTasks = courseTasks;
    }


}


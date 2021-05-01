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
    @OneToMany
    private List<Group> allGroups;
    @OneToMany
    private List<Assignment> allAssignments;
    @OneToMany
    private List<Task> courseTasks;

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

    public List<Assignment> getAllAssignments() {
        return this.allAssignments;
    }

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

    public void setAllAssignments(List<Assignment> allAssignments) {
        this.allAssignments = allAssignments;
    }

    public void setCourseTasks(List<Task> courseTasks) {
        this.courseTasks = courseTasks;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Course))
            return false;
        Course course = (Course) o;
        return Objects.equals(this.id, course.id) && Objects.equals(this.name, course.name)
                && Objects.equals(this.courseNo, course.courseNo)
                ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.courseNo);
    }

    @Override
    public String toString() {
        return "Group{" + "id=" + this.id + ", name='" + this.name + '\'' + ", courseNo='" + this.courseNo + '\'' + '}';
    }
}


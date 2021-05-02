package ezgi.project;

import java.util.Objects;
import java.util.List;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
class People {
    public enum PeopleType{
        Student,
        Instructor
    }
    private @Id @GeneratedValue Long id;
    private String name;
    private String contactInfo;
    private PeopleType type;
    private @OneToMany List<Course> allCourses;

    public People() {}

    public People(String name, String contactInfo) {
        this.name = name;
        this.contactInfo = contactInfo;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getContactInfo() {
        return this.contactInfo;
    }

    public List<Course> getAllCourses() {
        return this.allCourses;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public void setAllCourses(List<Course> allCourses) {
        this.allCourses = allCourses;
    }


    public void joinGroup(Group group) { group.addPeople(this); }

    public void joinGroupWithFriend(Group group, People people) {
        group.addPeople(this);
        group.addPeople(people);
    }

    public void discardFromGroup(Group group, People people) { group.removePeople(people); }

    public void leaveGroup(Group group) { group.removePeople(this); }

    public List<People> getUnassignedStudents(Course course) {
        List<Group> groups = course.getAllGroups();
        List<People> allPeople = course.getAllPeople();
        List<People> unassigned = new ArrayList<People>();
        for (People people : allPeople) {
            for(int i=0; i < groups.size(); i++ ){
                if((groups.get(i).getAllPeople()).contains(people)){
                    unassigned.add(people);
                }
            }
        }
        return unassigned;
    }

}

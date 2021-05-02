package ezgi.project;

import java.util.Objects;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
class Group {

    private @Id @GeneratedValue Long id;
    private String name;
    private Integer groupNo;
    private transient Grade groupGrade;
    private @OneToMany List<People> allPeople;
    private @OneToMany List<Task> groupTasks;

    public Group() {}

    public Group(String name, Integer groupNo) {
        this.name = name;
        this.groupNo = groupNo;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public Integer getGroupNo() {
        return this.groupNo;
    }

    public Grade getGroupGrade() {
		return this.groupGrade;
	}

    public List<People> getAllPeople() {
        return this.allPeople;
    }

    public List<Task> getGroupTasks() {
        return this.groupTasks;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGroupNo(Integer groupNo) {
        this.groupNo = groupNo;
    }

    public void setGroupGrade(Grade groupGrade) {
        this.groupGrade = groupGrade;
    }

    public void setAllPeople(List<People> allPeople) {
        this.allPeople = allPeople;
    }

    public void setGroupTasks(List<Task> groupTasks) {
        this.groupTasks = groupTasks;
    }


    public void addPeople(People people) { allPeople.add( people );}

    public void removePeople(People people) { allPeople.remove( people );}
}

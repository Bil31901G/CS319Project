package ezgi.project;

import java.util.Objects;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
class Group {

    private @Id @GeneratedValue Long id;
    private String name;
    private Integer groupNo;
    private Grade groupGrade;
    @OneToMany
    private List<People> allPeople;
    @OneToMany
    private List<Task> groupTasks;

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

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Group))
            return false;
        Group group = (Group) o;
        return Objects.equals(this.id, group.id) && Objects.equals(this.name, group.name)
                && Objects.equals(this.groupNo, group.groupNo)
               ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.groupNo);
    }

    @Override
    public String toString() {
        return "Group{" + "id=" + this.id + ", name='" + this.name + '\'' + ", groupNo='" + this.groupNo + '\'' + '}';
    }
}

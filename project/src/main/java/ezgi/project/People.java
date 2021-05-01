package ezgi.project;

import java.util.Objects;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
class People {

    private @Id @GeneratedValue Long id;
    private String name;
    private String contactInfo;
    @OneToMany
    private List<Course> allCourses;

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

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof People))
            return false;
        People people = (People) o;
        return Objects.equals(this.id, people.id) && Objects.equals(this.name, people.name)
                && Objects.equals(this.contactInfo, people.contactInfo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.contactInfo);
    }

    @Override
    public String toString() {
        return "People{" + "id=" + this.id + ", name='" + this.name + '\'' + this.contactInfo + '\'' + ", contactInfo='" + '}';
    }
}

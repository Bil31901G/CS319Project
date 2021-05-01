package ezgi.project;

import java.util.Objects;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
class Task {

    private @Id @GeneratedValue Long id;
    private String name;
    private Date date;

    public Task() {}

    public Task(String name, Date date) {
        this.name = name;
        this.date = date;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public Date getDate() {
        return this.date;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Task))
            return false;
        Task task = (Task) o;
        return Objects.equals(this.id, task.id) && Objects.equals(this.name, task.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name);
    }

    @Override
    public String toString() {
        return "People{" + "id=" + this.id + ", name='" + this.name + '\'' + ", date='" + this.date + '\'' + '}';
    }
}


package ezgi.project;

import javax.persistence.Entity;

@Entity
class Instructor extends People{

    public void AssignUnassignedStudent(Group group, People unassigned) {
        group.addPeople(unassigned);
    }
}

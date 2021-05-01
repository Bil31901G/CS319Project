package ezgi.project;

class PeopleNotFoundException extends RuntimeException {

    PeopleNotFoundException(Long id) {
        super("Could not find people " + id);
    }
}
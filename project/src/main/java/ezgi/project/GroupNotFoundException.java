package ezgi.project;

class GroupNotFoundException extends RuntimeException {

    GroupNotFoundException(Long id) {
        super("Could not find group " + id);
    }
}
package ezgi.project;

class ForGroupRequest extends GroupRequest{
    private Group receiver;

    public Group getReceiver() {
        return receiver;
    }

    public void setReceiver(Group receiver) {
        this.receiver = receiver;
    }
}

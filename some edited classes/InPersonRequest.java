package ezgi.project;

class InPersonRequest extends GroupRequest{
    private People receiver;

    public People getReceiver() {
        return receiver;
    }

    public void setReceiver(People receiver) {
        this.receiver = receiver;
    }
}

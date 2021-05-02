package ezgi.project;

class GroupRequest{
    public enum GroupRequestType{
        ForGroupRequest,
        InPersonRequest
    }
    private Integer requestNo;
    private String text;
    private String status;
    private People sender;

    public Integer getRequestNo() {
        return requestNo;
    }

    public String getText() {
        return text;
    }

    public String getStatus() {
        return status;
    }

    public People getSender() {
        return sender;
    }

    public void setRequestNo(Integer requestNo) {
        this.requestNo = requestNo;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setSender(People sender) {
        this.sender = sender;
    }

}

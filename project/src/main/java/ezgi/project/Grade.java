package ezgi.project;

class Grade{
    public enum GradeType{
        ArtifactGrade,
        PeerGrade
    }
    public Integer grade;
    public String comment;
    public Integer maxGrade;
    public GradeType type;

    public Integer getGrade() {
        return grade;
    }

    public String getComment() {
        return comment;
    }

    public Integer getMaxGrade() {
        return maxGrade;
    }

    public GradeType getType() {
        return type;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setMaxGrade(Integer maxGrade) {
        this.maxGrade = maxGrade;
    }

    public void setType(GradeType type) {
        this.type = type;
    }

}

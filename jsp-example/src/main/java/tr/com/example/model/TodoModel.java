package tr.com.example.model;

import java.time.LocalDate;

public class TodoModel {
    private String description;
    private LocalDate localDate;
    private boolean isDone;

    public TodoModel(String description, LocalDate localDate, boolean isDone) {
        this.description = description;
        this.localDate = localDate;
        this.isDone = isDone;
    }

    public TodoModel() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getLocalDate() {
        return localDate;
    }

    public void setLocalDate(LocalDate localDate) {
        this.localDate = localDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public boolean getIsDone() {
        return isDone;
    }
}

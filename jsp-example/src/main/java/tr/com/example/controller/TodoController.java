package tr.com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import tr.com.example.model.TodoModel;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping
public class TodoController {
    private List<TodoModel> todoModelList = new ArrayList<>();

    public TodoController() {
        todoModelList.add(new TodoModel("Spring Web MVC Sunumu", LocalDate.now(), true));
        todoModelList.add(new TodoModel("Makine Öğrenmesi Ödevi", LocalDate.now().plusDays(2), false));
        todoModelList.add(new TodoModel("Spring Kursu", LocalDate.now().minusDays(2), false));
    }

    @GetMapping("/getTodoList")
    public String getTodo(ModelMap model) {
        model.addAttribute("todos", todoModelList);
        return "todos";
    }
}

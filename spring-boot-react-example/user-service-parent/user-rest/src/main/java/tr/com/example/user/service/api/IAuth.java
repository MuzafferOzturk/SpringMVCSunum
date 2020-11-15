package tr.com.example.user.service.api;

import org.springframework.web.bind.annotation.*;
import tr.com.example.user.document.UserDocument;
import tr.com.example.user.service.data.LoginForm;

import java.util.List;

@RequestMapping("/auth")
public interface IAuth {
    @PostMapping("/user")
    boolean authUser(@RequestBody LoginForm loginForm);

    @GetMapping("/getAllUser")
    List<LoginForm> getAllUser();

    @GetMapping("/getDummyUser")
    LoginForm getDummyUser();

    @GetMapping("/say-hi")
    String sayHi();

    @PostMapping("/send/{message}")
    void sendMessageAllUsers(@PathVariable("message") String message);
}

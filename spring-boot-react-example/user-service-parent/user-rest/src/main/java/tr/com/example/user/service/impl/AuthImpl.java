package tr.com.example.user.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RestController;
import tr.com.example.user.dao.UsersRepository;
import tr.com.example.user.service.api.IAuth;
import tr.com.example.user.service.data.LoginForm;
import tr.com.example.user.socket.api.IUserSocketService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AuthImpl implements IAuth {

    @Autowired
    @Qualifier("usersRepository")
    UsersRepository usersRepository;

    @Autowired
    @Qualifier("userSocketServiceImpl")
    IUserSocketService userSocketService;

    @Override
    public List<LoginForm> getAllUser() {
        List<LoginForm> loginForms = new ArrayList<>();
        usersRepository.findAll().forEach(userDocument ->
                loginForms.add(new LoginForm(userDocument.getName(), userDocument.getPassword())));
        return loginForms;
    }

    @Override
    public LoginForm getDummyUser() {
        return new LoginForm("Dummy", "dummy");
    }

    @Override
    public String sayHi() {
        return "Hello";
    }

    @Override
    public boolean authUser(LoginForm loginForm) {
        return usersRepository.controlUser(loginForm.getName(), loginForm.getPassword());
    }

    public void sendMessageAllUsers(String message){
        userSocketService.sendMessage(message);
    }
}

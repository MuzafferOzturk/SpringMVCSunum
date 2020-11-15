package tr.com.example.user.socket.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import tr.com.example.user.socket.api.IUserSocketService;

@Service("userSocketServiceImpl")
public class UserSocketServiceImpl implements IUserSocketService {

    @Autowired
    SimpMessagingTemplate simpMessagingTemplate;

    @Override
    public void sendMessage(String message) {
        simpMessagingTemplate.convertAndSend("/topic/user", message);
    }
}

package tr.example;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tr.example.data.User;
import tr.example.exception.UserNotFoundException;

import javax.validation.Valid;

@RestController
@RequestMapping("/restTest")
public class ExampleRest {

    @GetMapping("/getOK")
    public ResponseEntity getResultOK() {
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/get-user-name/{id}")
    public ResponseEntity getPathVariable(@PathVariable("id") String id){
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @GetMapping("/get-user-name")
    public ResponseEntity getRequestParam(@RequestParam("id") String id){
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @GetMapping("/get-user-name-exception/{id}")
    public String getUserName(@PathVariable("id") String id){
        throw new UserNotFoundException("Id :" + id);
    }

    @PostMapping("/insert-user")
    public User saveUser(@Valid @RequestBody User user){
        return user;
    }

    //Controller Level Exception Handling
//    @ExceptionHandler(UserNotFoundException.class)
//    public void handleUserException(UserNotFoundException exception){
//        System.out.println(exception.toString());
//    }
}

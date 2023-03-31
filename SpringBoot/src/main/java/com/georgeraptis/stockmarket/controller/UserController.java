package com.georgeraptis.stockmarket.controller;

import com.georgeraptis.stockmarket.entity.User;
import com.georgeraptis.stockmarket.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService theUserService) {
        userService = theUserService;
    }

    @GetMapping("/users")
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping("/user/{userId}")
    public User getUser(@PathVariable int userId) {
        User user = userService.findById(userId);
        if (user == null) {
            throw new RuntimeException("user with id: " + userId + " not found");
        }

        return user;
    }

    @PostMapping("/user")
    public User addUser(@RequestBody User user) {
        User tempUser = userService.getUserByUsername(user.getUsername());
        if (tempUser != null) {
            throw new RuntimeException("user with username: " + user.getUsername() + " already exists");
        }
        user.setId(0);
        userService.save(user);
        return user;
    }

    @PutMapping("/user")
    public User updateUser(@RequestBody User user) {
        userService.save(user);
        return user;
    }

    @DeleteMapping("user/{userId}")
    public int deleteUser(@PathVariable int userId) {
        User tempUser = userService.findById(userId);
        if (tempUser == null) {
            throw new RuntimeException("user with id: " + userId + " not found");
        }
        userService.deleteById(userId);
        return 0;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/login/{username}/{password}")
    public User loginUser(@PathVariable("username") String username, @PathVariable("password") String password) {
       return userService.getUserByUsernameAndPassword(username, password);
    }
}

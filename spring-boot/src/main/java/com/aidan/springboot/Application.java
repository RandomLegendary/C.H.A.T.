package com.aidan.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@CrossOrigin(origins = "https://randomlegendary.github.io/")
@SpringBootApplication
@RestController
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    List<String> messages = new ArrayList<>();
    @PostMapping("/messages")
    public String addMessage(@RequestBody String message) {
        messages.add(message);
        return message;
    }

    @GetMapping("/messages")
    public List<String> getMessages() {
        return messages;
    }

    @GetMapping("/clearList")
    public void clearList() {
        messages.clear();
    }

}

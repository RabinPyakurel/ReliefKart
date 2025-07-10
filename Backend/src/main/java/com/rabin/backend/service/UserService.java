package com.rabin.backend.service;

import com.rabin.backend.model.UserDetails;
import com.rabin.backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDetails registerUser(UserDetails userDetails) {
        if(userRepository.findByEmail(userDetails.getEmail()) != null) {
            throw new RuntimeException("Email already registered");
        }

        if (userRepository.findByPhoneNumber(userDetails.getPhoneNumber()) != null) {
            throw new RuntimeException("Phone number already registered");
        }
        return userRepository.save(userDetails);
    }

    public UserDetails loginUser(String email, String password) {
        UserDetails user = userRepository.findByEmail(email);
        if(user == null|| !user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid credentials");
        }
        return user;


    }
}

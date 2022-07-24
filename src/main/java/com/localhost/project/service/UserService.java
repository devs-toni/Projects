package com.localhost.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.localhost.project.entity.User;
import com.localhost.project.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
    public void save(User user) {
    	userRepository.save(user);
    }

    public User findByUsername(String username) {
    	return userRepository.findByUsername(username);

    }
}

package com.localhost.project.service;

import com.localhost.project.entity.User;

public interface UserService {
	
    void save(User user);

    User findByUsername(String username);
}

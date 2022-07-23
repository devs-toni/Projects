package com.localhost.project.service;

public interface SecurityService {
	
    String findLoggedInUsername();

    void autoLogin(String username, String password);
}
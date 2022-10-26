package com.localhost.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.localhost.project.service.UserService;

@Controller
public class AppController {

	@Autowired
	UserService userService;

	@GetMapping("/index")
	public String index() {
		return "index";
	}

	@GetMapping("/error")
	public String showError() {
		return "error";
	}
}

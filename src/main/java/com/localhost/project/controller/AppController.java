package com.localhost.project.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.localhost.project.entity.UserLogin;
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

	@GetMapping("/home")
	public String loginSuccess(Model model, HttpServletRequest request) {
		UserLogin user = userService.gerUserInSession(request);
		String surname = user.getSurname();
		if (surname != null) {
			model.addAttribute("user", user.getName() + " " + surname);
			return "home";
		} else {
			model.addAttribute("user", user.getName());
			return "home";
		}
	}
}

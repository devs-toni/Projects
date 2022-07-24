package com.localhost.project.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.localhost.project.entity.User;
import com.localhost.project.service.UserService;

@Controller
public class UserController {
	
	@Autowired
	UserService userService;

	@GetMapping("/register")
	public String register(Model model) {
		model.addAttribute("user", new User());
		return "register";
	}

	@PostMapping("/process_register")
	public String processRegister(Model model, @Valid User user, BindingResult result) {
		if (userService.findByUsername(user.getUsername()) != null) {

			model.addAttribute("userExist", true);
			return "register";
		}

		if (!user.getPassword().equals(user.getCheckPassword())) {
			model.addAttribute("passError", true);
			return "register";
		}
		if (result.hasErrors()) {
			return "register";
		}		
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);		
		userService.save(user);		
		return "register_complete";
	}

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@GetMapping("/process_login")
	public String loginSuccess() {
		return "home";
	}

}

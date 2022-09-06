package com.localhost.project.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.service.UserLoginService;

@Controller
public class UserController {

	/*************************************************************************/ /* Variables */

	@Autowired
	UserLoginService userService;

	/*************************************************************************/ /* Mapeos */	
	
	/* REGISTRO */ /* REGISTRO */ /* REGISTRO */ /* REGISTRO */ /* REGISTRO */ /* REGISTRO */ 

	@GetMapping("/register")
	public String register(Model model) {
		model.addAttribute("userLogin", new UserLogin());
		return "register";
	}

	@PostMapping("/process_register")
	public String processRegister(Model model, @Valid UserLogin user, BindingResult result) {
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
		userService.save(user);
		return "register_complete";
	}
	
	/* LOGIN */ /* LOGIN */ /* LOGIN */ /* LOGIN */ /* LOGIN */ /* LOGIN */ /* LOGIN */ /* LOGIN */

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@GetMapping("/login_complete")
	public String loginSuccess() {
		return "home";
	}
	
	@GetMapping("/login_error")
	public String loginError(Model model) {
		model.addAttribute("errorLogin", "Email/Contraseña Incorrectos");
		return "login";
	}

}

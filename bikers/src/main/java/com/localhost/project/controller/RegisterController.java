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

import com.localhost.project.entity.UserLogin;
import com.localhost.project.service.UserService;

@Controller
public class RegisterController {

	@Autowired
	UserService userService;
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	@GetMapping("/register")
	public String register(Model model) {
		model.addAttribute("userLogin", new UserLogin());
		return "register";
	}

	@PostMapping("/process-register")
	public String processRegister(Model model, @Valid UserLogin user, BindingResult result,
			RedirectAttributes redirect) {
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
		redirect.addFlashAttribute("register", true);
		user.setIsOauth(false);
		userService.save(user);
		return "redirect:/login";
	}
}

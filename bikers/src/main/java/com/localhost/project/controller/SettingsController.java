package com.localhost.project.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.service.UserService;
import com.localhost.project.utils.FileUploadUtil;

@Controller
public class SettingsController {

	@Autowired
	UserService userService;
	@Autowired
	FileUploadUtil fileUploadUtil;
	
	@GetMapping("/settings")
	public String goSettings (Model model, HttpServletRequest request) {
		UserLogin user = userService.gerUserInSession(request);
		String surname = user.getSurname();
		String profileImage = user.getProfileImage();
		model.addAttribute("user", user);
		if (profileImage != null) {
			model.addAttribute("image", user.getProfileImage());
		} else {
			model.addAttribute("image", null);
		}
		if (surname != null) {
			model.addAttribute("username", user.getName() + " " + surname);
			return "configuration";
		} else {
			model.addAttribute("username", user.getName());
			return "configuration";
		}
	}
}

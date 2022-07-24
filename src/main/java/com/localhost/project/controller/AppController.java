package com.localhost.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

	@GetMapping("/index")
	public String index() {
		return "index";
	}
	
	@GetMapping("/error")
	public String showError() {
		return "error";	}
}

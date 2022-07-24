package com.localhost.project.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class AppController {

	@GetMapping("/index")
	public String index() {
		return "index";
	}
}

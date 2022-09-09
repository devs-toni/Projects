package com.localhost.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class DataController {

	@PostMapping("/upload-image")
	public String uploadImage() {

		return null;
	}
}

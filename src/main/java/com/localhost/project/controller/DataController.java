package com.localhost.project.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.service.UserService;
import com.localhost.project.utils.FileUploadUtil;

@Controller
public class DataController {

	@Autowired
	UserService userService;
	@Autowired
	FileUploadUtil fileUploadUtil;

	@PostMapping("/upload-image")
	public String uploadImage(@RequestParam("image") MultipartFile image, HttpServletRequest request) {
		if (!image.getOriginalFilename().equals("")) {
			String strImage = StringUtils.cleanPath(image.getOriginalFilename());
			UserLogin user = userService.gerUserInSession(request);
			userService.updateImageProfile(strImage, user.getId());
			String upload = "src/main/resources/static/images/profile/" + user.getId();
			try {
				fileUploadUtil.save(upload, strImage, image);
			} catch (IOException e) {
				e.printStackTrace();
			}
			return "redirect:/home";
		} else {
			return "redirect:/home";
		}
	}
}

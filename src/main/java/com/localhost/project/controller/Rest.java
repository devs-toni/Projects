package com.localhost.project.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.localhost.project.entity.UserLogin;
import com.localhost.project.service.UserService;
import com.localhost.project.utils.FileUploadUtil;

@RestController
public class Rest {
	
	@Autowired
	UserService userService;
	@Autowired
	FileUploadUtil fileUploadUtil;

	@PostMapping("/load")
	public String loadPreview(@RequestParam(name = "image") MultipartFile image, HttpServletRequest request) {
		String strImage = "";
		Gson json = new Gson();
		if (!image.getOriginalFilename().equals("")) {
			strImage = StringUtils.cleanPath(image.getOriginalFilename());
			UserLogin user = userService.gerUserInSession(request);
			String upload = "src/main/resources/static/images/profile/" + user.getId();
			try {
				fileUploadUtil.save(upload, strImage, image);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		return json.toJson(strImage);
	}
}

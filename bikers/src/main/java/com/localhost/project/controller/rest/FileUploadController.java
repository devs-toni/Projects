package com.localhost.project.controller.rest;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.localhost.project.entity.UserLogin;
import com.localhost.project.service.UserService;
import com.localhost.project.utils.FileUploadUtil;

import net.minidev.json.JSONObject;

@RestController
public class FileUploadController {

	@Autowired
	UserService userService;
	@Autowired
	FileUploadUtil fileUploadUtil;
	public static Set<String> previews = new HashSet<>();	

	@PostMapping("/loadfile")
	public ArrayList<Object> loadPreview(@RequestParam(name = "image") MultipartFile image,
			HttpServletRequest request) {
		String strImage = "";
		UserLogin user = null;
		user = userService.gerUserInSession(request);

		if (!image.getOriginalFilename().equals("")) {
			strImage = StringUtils.cleanPath(image.getOriginalFilename());
			user = userService.gerUserInSession(request);
			String upload = "src/main/resources/static/images/profile/" + user.getId();
			fileUploadUtil.save(upload, strImage, image);
			previews.add(strImage);
		}
		ArrayList<Object> response = new ArrayList<>();
		response.add(strImage);
		response.add(user.getId());
		return response;
	}
	
	@GetMapping("/forgetimage")
	public void forgetImage() {
		try {
			FileInputStream props = new FileInputStream("resources/application.yml");	
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	@PostMapping("/loadfilepublish")
	public ArrayList<Object> loadPreviewPublish(@RequestParam(name = "image") MultipartFile[] image,
			HttpServletRequest request) {
		String strImage = "";
		UserLogin user = null;
		user = userService.gerUserInSession(request);
		ArrayList<Object> response = new ArrayList<>();
		response.add(user.getId());
		if (image != null) {
			for (MultipartFile multipartFile : image) {
				strImage = StringUtils.cleanPath(multipartFile.getOriginalFilename());
				String upload = "src/main/resources/static/images/activities/" + user.getId();
				fileUploadUtil.save(upload, strImage, multipartFile);
				response.add(multipartFile.getOriginalFilename());
			}	
		}
		return response;
	}
	
	@PostMapping("/deletefilepublish")
	public void deletePreviewPublish(@RequestParam(name = "image") String path, HttpServletRequest request) {
		UserLogin user = userService.gerUserInSession(request);
		String file = path.replace("https://localhost/", "");
		file = "src/main/resources/static/images/activities/" + user.getId() + "/" + file;
		//fileUploadUtil.delete(file);
	}
}

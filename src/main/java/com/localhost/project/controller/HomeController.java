package com.localhost.project.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.localhost.project.controller.rest.FileUploadController;
import com.localhost.project.entity.Activity;
import com.localhost.project.entity.UserLogin;
import com.localhost.project.service.UserService;
import com.localhost.project.utils.FileUploadUtil;

@Controller
public class HomeController {

	@Autowired
	UserService userService;
	@Autowired
	FileUploadUtil fileUploadUtil;

	@GetMapping("/home")
	public String loginSuccess(Model model, HttpServletRequest request) {
		UserLogin user = userService.gerUserInSession(request);
		String surname = user.getSurname();
		String profileImage = user.getProfileImage();
		model.addAttribute("id", user.getId());
		List<Activity> activities = user.getActivities();
		model.addAttribute("activities", activities);
		if (profileImage != null) {
			model.addAttribute("image", user.getProfileImage());
		} else {
			model.addAttribute("image", null);
		}

		if (surname != null) {
			model.addAttribute("user", user.getName() + " " + surname);
			return "home";
		} else {
			model.addAttribute("user", user.getName());
			return "home";
		}
	}

	@PostMapping("/upload-image")
	public String uploadImage(@RequestParam("image") MultipartFile image, HttpServletRequest request) {
		if (!image.getOriginalFilename().equals("")) {
			String strImage = StringUtils.cleanPath(image.getOriginalFilename());
			UserLogin user = userService.gerUserInSession(request);
			userService.updateImageProfile(strImage, user.getId());
			deletePreviews(strImage, user.getId());
			return "redirect:/home";
		} else {
			return "redirect:/home";
		}
	}

	private void deletePreviews(String filename, Long id) {
		String image = userService.findById(id).getProfileImage();
		if (image != null) {
			FileUploadController.previews.add(image);
		}
		FileUploadController.previews.forEach(file -> {
			if (!file.equalsIgnoreCase(filename)) {
				fileUploadUtil.delete("src/main/resources/static/images/profile/" + id, file);
			}
		});
		FileUploadController.previews.clear();
	}
	
	@PostMapping("/publish")
	private String publish(@RequestParam("image") MultipartFile[] images,
						   @RequestParam(name = "description") String description, 
						   @RequestParam(name = "final") String[] imagesFinal,
						   HttpServletRequest request) {
		ArrayList<String> publishImages = new ArrayList<>();
		if (images != null) {
			for (MultipartFile image : images) {
				if (imagesFinal.length == 0) {
					publishImages.add(image.getOriginalFilename());
				}
				for (String str : imagesFinal) {
					if (str.equals(image.getOriginalFilename())) {
					}
				}
			}
		}
		UserLogin user = userService.gerUserInSession(request);
		Date date = new Date();
		userService.saveActivity(description, user, date, publishImages);
		return "redirect:/home";
	}
}

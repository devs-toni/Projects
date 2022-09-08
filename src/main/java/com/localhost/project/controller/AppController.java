package com.localhost.project.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AppController {

	@GetMapping("/index")
	public String index() {
		return "index";
	}

	@GetMapping("/error")
	public String showError() {
		return "error";
	}

	@GetMapping("/home")
	public String loginSuccess(Model model, HttpSession httpSession) {
		List<String> comments = (List<String>) httpSession.getAttribute("comments");
		if (comments != null) {
			model.addAttribute("comments", comments);
		}
		return "home";
	}

	@PostMapping("/comment")
	public ModelAndView comment(@RequestParam("comment") String comment, HttpServletRequest request) {
		List<String> comments = (List<String>) request.getSession().getAttribute("comments");
		if (comments == null) {
			comments = new ArrayList<>();
			request.getSession().setAttribute("comments", comments);
		}
		comments.add(comment);
		request.getSession().setAttribute("comments", comments);
		return new ModelAndView("redirect:/home");
	}
}

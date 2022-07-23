package com.localhost.project.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SessionController {
		
	@PostMapping("/initSession")
	public String initializeSession(Model model, HttpServletRequest request) {
		// get the notes from request session
//		List<String> notes = (List<String>) request.getSession().getAttribute("NOTES_SESSION");
//		if (notes == null) {
//			notes = new ArrayList<>();
//			// if notes object is not present in session, set notes in the request session
//			request.getSession().setAttribute("NOTES_SESSION", notes);
//		}
		
		return "redirect:/home";
	}

	@GetMapping("/home")
	public String home(Model model, HttpSession session) {
		//List<String> notes = (List<String>) session.getAttribute("NOTES_SESSION");
		//model.addAttribute("notesSession", notes != null ? notes : new ArrayList<>());
		return "home";
	}

	@PostMapping("/invalidate/session")
	public String destroySession(HttpServletRequest request) {
		// invalidate the session , this will clear the data from configured database
		// (Mysql/redis/hazelcast)
		request.getSession().invalidate();
		return "redirect:/home";
	}
}
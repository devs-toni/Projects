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

@Controller
public class SessionController {
	
    @SuppressWarnings("unchecked")
	@PostMapping("/addNote")
    public String addNote(Model model, @RequestParam("note") String note, HttpServletRequest request) {   	
        List<String> notes = (List<String>) request.getSession().getAttribute("NOTES_SESSION");
        if (notes == null) {
            notes = new ArrayList<>();
            request.getSession().setAttribute("NOTES_SESSION", notes);
        }
        notes.add(note);
        request.getSession().setAttribute("NOTES_SESSION", notes);
        model.addAttribute("notes", notes);
        return "notes";
    }
    
    @SuppressWarnings("unchecked")
	@GetMapping("/notes")
    public String home(Model model, HttpSession session) {
        List<String> notes = (List<String>) session.getAttribute("NOTES_SESSION");
        model.addAttribute("notesSession", notes != null ? notes : new ArrayList<>());
        return "home";
    }
}

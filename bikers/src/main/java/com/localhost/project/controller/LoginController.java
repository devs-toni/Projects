package com.localhost.project.controller;

import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.service.UserService;

@Controller
public class LoginController {


	@Autowired
	UserService userService;
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@GetMapping("/perform-login")
	public String performLogin(RedirectAttributes redirect, @Param("username") String username,
			@Param("password") String password, HttpServletRequest request) {
		HttpSession session = request.getSession();
		UserLogin user = userService.findByUsername(username);
		if (user != null && encoder.matches(password, user.getPassword())) {
			session.setAttribute("user", user.getId());
			redirect.addFlashAttribute("askImage", true);
			return "redirect:/home";
		} else {
			return "redirect:/login-error";
		}
	}

	@GetMapping("/perform-oauth-login")
	public String performOauthLogin(HttpServletRequest request, RedirectAttributes redirect) {
		HttpSession session = request.getSession();
		String email = achieveEmail(session.getAttribute("SPRING_SECURITY_CONTEXT"));
		UserLogin user = userService.findByUsername(email);
		session.setAttribute("user", user.getId());
		redirect.addFlashAttribute("askImage", true);
		return "redirect:/home";
		
	}

	@GetMapping("/login-error")
	public String loginError(Model model) {
		model.addAttribute("errorLogin", "Email/Contraseña Incorrectos");
		return "login";
	}

	private String achieveEmail(Object context) {
		String email = "";
		String strContext = String.valueOf(context);
		StringTokenizer tokenizer = new StringTokenizer(strContext, "[");
		while (tokenizer.hasMoreElements()) {
			String str = tokenizer.nextToken();
			if (str.contains("@")) {
				str = str.replace("Principal=", "");
				str = str.replace(", Credentials=", "");
				email = str;
			}
		}
		return email;
	}

}

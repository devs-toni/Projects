package com.localhost.project.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.repository.UserRepository;

@Service("UserLoginService")
public class UserService implements UserDetailsService {

	/*********************************************************************************/ /* Repositorio */

	@Autowired
	UserRepository userRepository;

	/*********************************************************************************/ /* OtrasVariables */

	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	/*********************************************************************************/ /* Funciones Útiles */

	public void save(UserLogin user) {
		user.setPassword(encoder.encode(user.getPassword()));
		userRepository.save(user);
	}

	public void saveOauth(UserLogin user) {
		userRepository.save(user);
	}

	public Boolean validateUserLogin(String username, String password) {
		UserLogin user = userRepository.findByUsername(username);
		if (user != null) {
			if (encoder.matches(password, user.getPassword()))
				return true;
		}
		return false;
	}

	public UserLogin gerUserInSession(HttpServletRequest request) {
		return userRepository.findById(Long.valueOf(String.valueOf(request.getSession().getAttribute("user")))).get();
	}

	/*********************************************************************************/ /* Búsquedas BBDD */

	public UserLogin findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	public UserLogin findById(Long id) {
		return userRepository.findById(id).get();
	}

	/*********************************************************************************/ /* Implementaciones */

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final UserLogin user = userRepository.findByUsername(username);
		UserDetails userDetail = User.withUsername(user.getUsername()).password(user.getPassword()).authorities("ADMIN")
				.build();
		return userDetail;
	}
}

package com.localhost.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.repository.UserLoginRepository;

@Service("userLoginService")
public class UserLoginService implements UserDetailsService {

	/*********************************************************************************/ /* Repositorio */

	@Autowired
	UserLoginRepository userRepository;

	/*********************************************************************************/ /* OtrasVariables */

	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	/*********************************************************************************/ /* Funciones Útiles */

	public void save(UserLogin user) {
		user.setPassword(encoder.encode(user.getPassword()));
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

	/*********************************************************************************/ /* Búsquedas BBDD */

	public UserLogin findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	/*********************************************************************************/ /* Implementaciones */

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final UserLogin user = userRepository.findByUsername(username);
        UserDetails userDetail = User.withUsername(user.getUsername()).password(user.getPassword()).authorities("ADMIN").build();
		return userDetail;
	}

}

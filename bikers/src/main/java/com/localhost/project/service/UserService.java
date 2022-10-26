package com.localhost.project.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.localhost.project.entity.Activity;
import com.localhost.project.entity.UserLogin;
import com.localhost.project.repository.ActivityRepository;
import com.localhost.project.repository.UserRepository;

@Service("UserLoginService")
public class UserService implements UserDetailsService {

	/*********************************************************************************/ /* Repositorio */

	@Autowired
	UserRepository userRepository;
	@Autowired
	ActivityRepository activityRepository;

	/*********************************************************************************/ /* OtrasVariables */

	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	/*********************************************************************************/ /* Funciones Útiles */
	
	public void save(UserLogin user) {
		if (user.getIsOauth()) {
			userRepository.save(user);
		} else {
			user.setPassword(encoder.encode(user.getPassword()));
			userRepository.save(user);
		}
	}

	public UserLogin gerUserInSession(HttpServletRequest request) {
		if (Long.valueOf(String.valueOf(request.getSession().getAttribute("user"))) != null) {
			return userRepository.findById(Long.valueOf(String.valueOf(request.getSession().getAttribute("user")))).get();
		} else return null;
	}

	/*********************************************************************************/ /* Búsquedas BBDD */

	public UserLogin findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	public UserLogin findById(Long id) {
		return userRepository.findById(id).get();
	}
	
	public void updateImageProfile(String image, Long id) {
		userRepository.updateProfileImage(image, id);
	}

	/*********************************************************************************/ /* Implementaciones */

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final UserLogin user = userRepository.findByUsername(username);
		UserDetails userDetail = User.withUsername(user.getUsername()).password(user.getPassword()).authorities("ADMIN")
				.build();
		return userDetail;
	}
	
	public void saveActivity(String description, UserLogin user, Date date, ArrayList<String> images) {
		List<Activity> activities = user.getActivities();
		activities.add(new Activity(description, user, date, images));
		user.setActivities(activities);
	}
}

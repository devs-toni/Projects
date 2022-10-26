package com.localhost.project.security.oauth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.repository.UserRepository;
import com.localhost.project.service.UserService;
import com.localhost.project.utils.Logger;

@Service
public class OAuth2UserService extends DefaultOAuth2UserService {
	
	@Autowired
	UserService userService;
	@Autowired
	Logger logger;

	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		OAuthUser user = new OAuthUser(super.loadUser(userRequest));
		saveOAuthUser(user);
		return user;
	}
	
	public void saveOAuthUser (OAuthUser oAuthUser) {
		UserLogin user = userService.findByUsername(oAuthUser.getAttribute("email").toString());
		if (user == null) {
			UserLogin newUser = new UserLogin(oAuthUser.getEmail(), oAuthUser.getName(), true);
			userService.save(newUser);
			logger.debug("Se ha guardado un OAuth2User: " + newUser.getUsername());
		} else {
			logger.debug("El email: " + user.getUsername() + " ya existe en BBDD");
		}
	}
}

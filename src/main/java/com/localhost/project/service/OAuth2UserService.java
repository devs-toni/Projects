package com.localhost.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.localhost.project.entity.OAuth;
import com.localhost.project.entity.OAuthUser;
import com.localhost.project.repository.OAuth2UserRepository;
import com.localhost.project.utils.Logger;

@Service
public class OAuth2UserService extends DefaultOAuth2UserService {
	
	@Autowired
	OAuth2UserRepository userRepository;
	@Autowired
	Logger logger;

	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		OAuth user = new OAuth(super.loadUser(userRequest));
		saveOAuthUser(user);
		return user;
	}
	
	public void saveOAuthUser (OAuth oAuthUser) {
		OAuthUser user = userRepository.findByUserName(oAuthUser.getAttribute("name").toString());
		if (user == null) {
			OAuthUser newUser = new OAuthUser(oAuthUser.getName(), oAuthUser.getEmail());
			userRepository.save(newUser);
			logger.debug("Se ha guardado un OAuth2User: " + newUser.getUserEmail());
		} else {
			logger.debug("El email: " + user.getUserEmail() + " ya existe en BBDD");
		}
	}
}

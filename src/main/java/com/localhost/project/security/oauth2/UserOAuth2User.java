package com.localhost.project.security.oauth2;

import java.io.Serializable;
import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoAutoConfiguration;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.repository.UserLoginRepository;

public class UserOAuth2User implements OAuth2User, Serializable {

	private static final long serialVersionUID = -6429611803938204840L;
	private OAuth2User oauth2User;

	@Autowired
	UserLoginRepository repository;

	public UserOAuth2User(OAuth2User oauth2User) {
		this.oauth2User = oauth2User;
		if (repository.findByUsername(oauth2User.getAttribute("email")) != null) {
			UserLogin user = new UserLogin(oauth2User.getAttribute("email"), oauth2User.getAttribute("name"), "123");
			System.out.println(oauth2User.getName());
			System.out.println(oauth2User.getAttributes());
		} else {
			
		}
	}

	@Override
	public Map<String, Object> getAttributes() {
		return oauth2User.getAttributes();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return oauth2User.getAuthorities();
	}

	@Override
	public String getName() {
		return oauth2User.getAttribute("name");
	}

	public String getFullName() {
		return oauth2User.getAttribute("name");
	}

}

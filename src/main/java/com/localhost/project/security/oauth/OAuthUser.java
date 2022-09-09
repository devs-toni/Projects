package com.localhost.project.security.oauth;

import java.io.Serializable;
import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

public class OAuthUser implements OAuth2User, Serializable{
	private static final long serialVersionUID = 1L;
	private OAuth2User oauth2User;
	
	
	public OAuthUser (OAuth2User oauth2User) {
		this.oauth2User = oauth2User;
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
	public String getEmail() {
		return oauth2User.getAttribute("email");
	}

	@Override
	public String toString() {
		return oauth2User.getAttribute("email");
	}
	
	

}

package com.localhost.project.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.localhost.project.security.oauth2.UserOAuth2UserService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserOAuth2UserService userOAuth2UserService;


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/index", "/register", "/process_register", "/process_login", "/home", "/user",
						"/oauth2/authorization/facebook")
				.permitAll().anyRequest().authenticated().and().formLogin().loginPage("/login")
				.usernameParameter("email").permitAll().defaultSuccessUrl("/login-success").permitAll().and()
				.oauth2Login().loginPage("/login").userInfoEndpoint().userService(userOAuth2UserService).and().and()
				.logout().permitAll()
				/*
				 * .and().rememberMe() .key("") .tokenValiditySeconds(14*24*60*60)
				 */
				.and().exceptionHandling().accessDeniedPage("/error");
	}

}
package com.localhost.project.security;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.localhost.project.security.oauth.OAuth2UserService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	/**********************************************************************************************/ /* Configuration */
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
				.authorizeRequests()
					.antMatchers("/resources/**","/js/**","/css/**","/images/**").permitAll()
					.antMatchers("/login","/perform-login","perform-oauth-login","/login-error","/oauth2/authorization/facebook","oauth2/authorization/google","/index","/register","/process-register","/error").permitAll()
				.anyRequest()
					.authenticated()
					.and()
				.formLogin()
					.loginPage("/login")
					.loginProcessingUrl("/perform-login")
					.permitAll()
					.and()
				.oauth2Login()
					.loginPage("/login")
					.defaultSuccessUrl("/perform-oauth-login")
					.userInfoEndpoint()
					.userService(OAuth2UserService)
					.and()
				.and()
				.logout()
					.logoutSuccessUrl("/")
					.invalidateHttpSession(true)
					.clearAuthentication(true)
					.permitAll()
					.and()
				.rememberMe() 
					//.key("")
					.tokenValiditySeconds(14 * 24 * 60 * 60)
					.and()
				.exceptionHandling()
					.accessDeniedPage("/error");
	}

	/*****************************************************************************************************/ /* Beans */

	@Resource(name = "UserLoginService")
	private UserDetailsService userDetailsService;

	@Autowired
	private OAuth2UserService OAuth2UserService;

	/*******************************************************************************************************/ /* Auth */

	@Bean
	public DaoAuthenticationProvider authProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder(passwordEncoder());
		return authProvider;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authProvider());
	}


}
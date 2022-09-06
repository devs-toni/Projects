package com.localhost.project.security;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.MimeMappings;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.localhost.project.security.oauth2.UserOAuth2UserService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	/**********************************************************************************************/ /* Configuration */
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
				.authorizeRequests()
					.antMatchers("/resources/**","/js/**","/css/**","/images/**").permitAll()
					.antMatchers("/login", "/do_login", "/process_login","/login_complete","/login-error","/oauth2/authorization/facebook", "oauth2/authorization/google","/index", "/register", "/process_register","/error").permitAll()
				.anyRequest()
					.authenticated()
					.and()
				.formLogin()
					.loginPage("/login")
					.permitAll()
					.failureUrl("/login_error")
					.defaultSuccessUrl("/login_complete")
					.and()
				.oauth2Login()
					.loginPage("/login")
					.defaultSuccessUrl("/login_complete")
					.userInfoEndpoint()
					.userService(userOAuth2UserService)
					.and()
				.and()
				.logout()
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

	@Resource(name = "userLoginService")
	private UserDetailsService userDetailsService;

	@Autowired
	private UserOAuth2UserService userOAuth2UserService;

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
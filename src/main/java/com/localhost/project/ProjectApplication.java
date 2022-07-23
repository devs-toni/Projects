package com.localhost.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.request.RequestContextListener;

@SpringBootApplication
public class ProjectApplication {

	//private static final Logger LOG = Logger.getLogger(ProjectApplication.class.getName());

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}
    @Bean
    public RequestContextListener requestContextListener() {
        return new RequestContextListener();
    }
}

package com.example.task;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Override
	 public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Allow all endpoints
            .allowedOrigins("http://localhost:4200") // Allow your Angular app
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specific methods
            .allowCredentials(true); // Allow credentials if needed
    }

}

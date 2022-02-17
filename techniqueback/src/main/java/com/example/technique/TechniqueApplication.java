package com.example.technique;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.util.ResourceUtils;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.*;

@SpringBootApplication
public class TechniqueApplication  {
	public static void main(String[] args) {
		SpringApplication.run(TechniqueApplication.class, args);
	}

}
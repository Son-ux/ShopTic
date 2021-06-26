package com.tic.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller(value = "controllerOfWeb")
@RequestMapping(value = "web", method = RequestMethod.GET)
public class homeController {	
	@GetMapping(value = "/home")
	public String home() {
		return "home";
	}
}

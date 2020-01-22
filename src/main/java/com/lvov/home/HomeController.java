package com.lvov.home;

import java.security.Principal;

import org.springframework.core.SpringVersion;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
class HomeController {

	@ModelAttribute("module")
	String module() {
		return "home";
	}

	@RequestMapping(value = "/",method= RequestMethod.GET)
	String index(Principal principal, Model model) {
		return "/home/index";
	}
}

package kr.inhatc.spring.thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ThymeleafController {

	
	@GetMapping(value = "/thymeleaf/ex1")
	public String ex1(Model model) {
		model.addAttribute("data","잘 돌아가고 있구나");
		return "thymeleaf/ex1";
	}//end of ex1
	
	
}//end of class

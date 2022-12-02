package kr.inhatc.spring.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

	@Value(value = "${uploadPath}")
	private String uploadPath;

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

		registry.addResourceHandler("/images/**").addResourceLocations(uploadPath);

		/* '/js/**'로 호출 '/static/js/' */
		registry.addResourceHandler("/js/**").addResourceLocations("classpath:/static/js/")
				.setCachePeriod(60 * 60 * 24 * 365);
		/* '/css/**'로 호출 '/static/css/' */
		registry.addResourceHandler("/css/**").addResourceLocations("classpath:/static/css/")
				.setCachePeriod(60 * 60 * 24 * 365);

	}// end of addRes

}// end of class

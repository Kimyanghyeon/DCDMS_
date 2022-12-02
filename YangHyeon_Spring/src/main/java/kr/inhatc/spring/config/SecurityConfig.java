package kr.inhatc.spring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

		http.formLogin().loginPage("/member/login").defaultSuccessUrl("/").usernameParameter("id")
				.passwordParameter("pw").failureUrl("/member/login/error").and().logout()
				.logoutRequestMatcher(new AntPathRequestMatcher("/member/logout")).logoutSuccessUrl("/");

		http.authorizeRequests().mvcMatchers("/css/**", "/js/**", "/img/**", "/images/**").permitAll()
				.mvcMatchers("/", "/thymeleaf/**", "/log/**", "/item/**", "/member/**").permitAll()
				.mvcMatchers("/files/**", "/board/**").permitAll().anyRequest().authenticated();

		http.headers().frameOptions().disable();

		return http.build();

	}// end of filterChain

	@Bean
	public PasswordEncoder passwordEncoder() {

		return new BCryptPasswordEncoder();

	}// end of password encoder

}// end of class

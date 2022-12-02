package kr.inhatc.spring.member.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import kr.inhatc.spring.member.constant.Grade;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MemberFormDto {

	@NotBlank(message = "아이디는 필수 입력입니다.")
	@Length(min = 3, max = 12, message = "아이디는 3자 이상 12자 이하로 입력하세요.")
	private String id; // 아이디(학번)

	@NotEmpty(message = "비밀번호는 필수 항목 입니다.")
	private String pw; // 비밀번호

	@NotEmpty(message = "이메일은 필수 입력 값입니다.")
	@Email(message = "이메일 형식으로 입력하세요.")
	private String email;

	@NotEmpty(message = "이름은 필수 항목 입니다.")
	private String name; // 이름

	@NotNull(message = "반은 필수 항목 입니다.")
	private Grade grade; // 반

}// end of class

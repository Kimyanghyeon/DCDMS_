package kr.inhatc.spring.item.dto;

import kr.inhatc.spring.item.constant.LanguageType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemSearchDto {

	private String searchDateType;

	private LanguageType searchLanguageType; // 타입별 조회

	private String searchBy; // 조회유형

	private String searchQuery = "";

}// end of class
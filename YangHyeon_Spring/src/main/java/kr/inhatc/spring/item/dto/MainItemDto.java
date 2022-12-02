package kr.inhatc.spring.item.dto;

import com.querydsl.core.annotations.QueryProjection;

import kr.inhatc.spring.item.constant.LanguageType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MainItemDto {

	private Long id; // 컨텐츠 코드

	private String itemTitle; // 제목

	private LanguageType itemField; // 분야

	private String itemContents; // 내용

	private String imgUrl;

	@QueryProjection
	public MainItemDto(Long id, String itemTitle, LanguageType itemField, String itemContents, String imgUrl) {
		super();
		this.id = id;
		this.itemTitle = itemTitle;
		this.itemField = itemField;
		this.itemContents = itemContents;
		this.imgUrl = imgUrl;
	}// end of MainItemDto

}// end of class

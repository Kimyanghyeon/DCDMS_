package kr.inhatc.spring.item.constant;

public enum LanguageType {

	JAVA("Java"), C1("C , C++ , C#"), PYTHON("Python"), MOBILE("Mobile"), ETC("기타");

	private final String description;

	LanguageType(String description) {
		this.description = description;
	}// end of LanguageType

	public String getDescription() {
		return description;
	}// end of get

}// end of enum

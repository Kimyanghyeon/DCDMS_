function goSchoolLink() {
	location.href = 'https://www.inhatc.ac.kr/sites/kr/index.do';
}//end of go

function goDepartLink() {
	location.href = 'https://cse.inhatc.ac.kr/cse/index.do';
}//end of go

function jf_unifiedSearch(form){
		if($("#search_text").size() > -1){
			var qt = $("#search_text").val();
			if(qt != "" && qt != null){
				$("#searchTextDiv").hide();
				return true;
			}else{
				//alert('검색어를 입력해주세요.');
				$("#searchTextDiv").show();
				$("#search_text").focus();
			}//end of else if
		}//end of if
		return false;
}//end of jf










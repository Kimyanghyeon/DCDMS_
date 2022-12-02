package kr.inhatc.spring.item.repository;

import static kr.inhatc.spring.item.entity.QItem.item;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.thymeleaf.util.StringUtils;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Wildcard;
import com.querydsl.jpa.impl.JPAQueryFactory;

import kr.inhatc.spring.item.constant.LanguageType;
import kr.inhatc.spring.item.dto.ItemSearchDto;
import kr.inhatc.spring.item.entity.Item;

public class ItemRepositoryCustomImpl implements ItemRepositoryCustom {

	private JPAQueryFactory queryFactory; // 동적으로 쿼리 생성을 위해 사용

	public ItemRepositoryCustomImpl(EntityManager em) {
		this.queryFactory = new JPAQueryFactory(em); // 초기화
	}// end of ItemRepositoryCustomImpl

	private BooleanExpression searchLanguageTypeEq(LanguageType languageType) {
		return languageType == null ? null : item.itemField.eq(languageType);
	}// end of searchLanguageTypeEq

	private BooleanExpression regDateAfter(String searchDateType) {
		LocalDateTime dateTime = LocalDateTime.now();

		if (StringUtils.equals("all", searchDateType) || searchDateType == null) {
			return null;
		} else if (StringUtils.equals("1d", searchDateType)) {
			dateTime = dateTime.minusDays(1);
		} else if (StringUtils.equals("1w", searchDateType)) {
			dateTime = dateTime.minusWeeks(1);
		} else if (StringUtils.equals("1m", searchDateType)) {
			dateTime = dateTime.minusMonths(1);
		} else if (StringUtils.equals("6m", searchDateType)) {
			dateTime = dateTime.minusMonths(6);
		} // end of else if regDateAfter

		return item.regTime.after(dateTime);
	}// end of regDateAfter

	private BooleanExpression searchByLike(String searchBy, String searchQuery) {
		if (StringUtils.equals("itemTitle", searchBy)) {
			return item.itemTitle.like("%" + searchQuery + "%");
		} else if (StringUtils.equals("createBy", searchBy)) {
			return item.createdBy.like("%" + searchQuery + "%");
		} // end of else if
		return null;
	}// end of searchByLike

	@Override
	public Page<Item> getStudentItemList(ItemSearchDto itemSearchDto, Pageable pageable) {
		List<Item> content = queryFactory.selectFrom(item).where(
				// 기간
				regDateAfter(itemSearchDto.getSearchDateType()),
				// 분야
				searchLanguageTypeEq(itemSearchDto.getSearchLanguageType()),
				// 상품명 또는 등록자
				searchByLike(itemSearchDto.getSearchBy(), itemSearchDto.getSearchQuery())).orderBy(item.id.desc())
				.offset(pageable.getOffset()) // 시작 인덱스
				.limit(pageable.getPageSize()) // 한 번에 가져올 최대 개수
				.fetch();

		long total = queryFactory.select(Wildcard.count).from(item)
				.where(regDateAfter(itemSearchDto.getSearchDateType()),
						searchByLike(itemSearchDto.getSearchBy(), itemSearchDto.getSearchQuery()))
				.fetchOne();

		return new PageImpl<>(content, pageable, total);
	}// end of get StudentItem

}// end of class

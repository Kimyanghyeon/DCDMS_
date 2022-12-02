package kr.inhatc.spring.item.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import kr.inhatc.spring.item.entity.Item;

public interface ItemRepository
		extends JpaRepository<Item, Long>, QuerydslPredicateExecutor<Item>, ItemRepositoryCustom {

	List<Item> findByItemTitle(String ItemTitle);

	List<Item> findByItemTitleOrItemField(String itemTitle, String itemField);

}// end of interface

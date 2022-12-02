package kr.inhatc.spring.main.controller;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import kr.inhatc.spring.item.dto.ItemSearchDto;
import kr.inhatc.spring.item.entity.Item;
import kr.inhatc.spring.item.service.ItemService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MainController {

	private final ItemService itemService;

	@GetMapping({ "/", "/{page}" })
	public String itemList(Model model, ItemSearchDto itemSearchDto, @PathVariable("page") Optional<Integer> page) {

		log.info("검색 정보 : " + itemSearchDto);

		Pageable pageable = PageRequest.of(page.isPresent() ? page.get() : 0, 10);
		Page<Item> items = itemService.getStudentItemList(itemSearchDto, pageable);
		log.info("크기 : " + items.getSize());

		model.addAttribute("items", items);
		model.addAttribute("itemSearchDto", itemSearchDto);
		model.addAttribute("maxPage", 5);

		return "main";
	}// end of itemList

}// end of class

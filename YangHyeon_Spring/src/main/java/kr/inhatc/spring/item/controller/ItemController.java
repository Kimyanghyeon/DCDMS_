package kr.inhatc.spring.item.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import kr.inhatc.spring.item.constant.LanguageType;
import kr.inhatc.spring.item.dto.ItemFormDto;
import kr.inhatc.spring.item.service.ItemService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ItemController {

	private final ItemService itemService;

	@GetMapping("/student/item/new")
	public String itemForm(Model model) {
		log.info("==========================================> 불러오기 ");
		model.addAttribute("itemFormDto", new ItemFormDto());
		return "item/itemForm";
	}// end of itemFOrm

	@ModelAttribute("languageType")
	public LanguageType[] languageType() {
		return LanguageType.values();
	}// end of LanguageType

	@PostMapping("/student/item/new")
	public String itemNew(@Valid ItemFormDto itemFormDto, BindingResult bindingResult, Model model,
			@RequestParam("itemImgFile") List<MultipartFile> itemImgFileList) {
		log.info("==========================================> 등록하기 ");
		if (bindingResult.hasErrors()) {
			return "item/itemForm";
		} // end of if

		try {
			itemService.saveItem(itemFormDto, itemImgFileList);
		} catch (IOException e) {
			model.addAttribute("errorMessage", "상품 등록 중 오류 발생!!!");
		} // end of try catch

		return "redirect:/";
	}// end of item new

	@GetMapping(value = "/item/{itemId}")
	public String itemDtl(Model model, @PathVariable("itemId") Long itemId) {
		ItemFormDto itemFormDto = itemService.getItemDtl(itemId);
		model.addAttribute("item", itemFormDto);
		return "item/itemDtl";
	}// end of itemDtl

}// end of class

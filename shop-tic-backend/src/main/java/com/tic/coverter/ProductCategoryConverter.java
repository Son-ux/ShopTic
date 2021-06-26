package com.tic.coverter;

import org.springframework.stereotype.Component;

import com.tic.dto.ProductCategoryDto;
import com.tic.entity.ProductCategory;

@Component
public class ProductCategoryConverter {
	public ProductCategoryDto toDto(ProductCategory productCategory) {
		return ProductCategoryDto.builder()
				.categoryId(productCategory.getCategoryId())
				.categoryName(productCategory.getCategoryName())
				.categoryCode(productCategory.getCategoryCode())
				.createDate(productCategory.getCreateDate())
				.modDate(productCategory.getModDate())
				.delFlag(productCategory.getDelFlag())
				.build();
	}
}
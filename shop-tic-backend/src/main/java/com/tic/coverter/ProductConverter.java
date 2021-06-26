package com.tic.coverter;

import org.springframework.stereotype.Component;

import com.tic.dto.ProductDto;
import com.tic.entity.Product;
import com.tic.entity.ProductCategory;

@Component
public class ProductConverter {
	public ProductDto toDto(Product product) {
		ProductCategory category = ProductCategory.builder()
				.categoryId(product.getProductCategory().getCategoryId())
				.categoryCode(product.getProductCategory().getCategoryCode())
				.categoryName(product.getProductCategory().getCategoryName())
				.listProducts(null)
				.build();
		return ProductDto.builder()
				.productId(product.getProductId())
				.productName(product.getProductName())
				.productImg(product.getProductImg())
				.shortDescription(product.getShortDecription())
				.createDate(product.getCreateDate())
				.modifyDate(product.getModifyDate())
				.delFlag(product.getDelFlag())
				.status(product.getStatus())
				.rated(product.getRated())
				.productCategory(category)
				.build();
	}
	
}

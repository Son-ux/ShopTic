package com.tic.coverter;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.tic.dto.ProductDto;
import com.tic.entity.Product;
import com.tic.entity.ProductCategory;
import com.tic.entity.ProductColor;

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
				.shortDescription(product.getShortDescription())
				.productPrice(product.getProductPrice())
				.createDate(product.getCreateDate())
				.modifyDate(product.getModifyDate())
				.delFlag(product.getDelFlag())
				.status(product.getStatus())
				.rated(product.getRated())
				.productCategory(category)
				.build();
	}
	
	public Product toEntity(ProductDto productDto) {
		ProductCategory category = ProductCategory.builder()
				.categoryId(productDto.getProductCategory().getCategoryId())
				.categoryCode(productDto.getProductCategory().getCategoryCode())
				.categoryName(productDto.getProductCategory().getCategoryName())
				.listProducts(null)
				.build();
		return Product.builder()
				.productId(productDto.getProductId())
				.productName(productDto.getProductName())
				.productImg(productDto.getProductImg())
				.shortDescription(productDto.getShortDescription())
				.productPrice(productDto.getProductPrice())
				.createDate(productDto.getCreateDate())
				.modifyDate(productDto.getModifyDate())
				.delFlag(productDto.getDelFlag())
				.status(productDto.getStatus())
				.rated(productDto.getRated())
				.productCategory(category)
				.build();
	}
	
}

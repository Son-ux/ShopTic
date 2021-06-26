package com.tic.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tic.Repository.ProductCategoryRepository;
import com.tic.coverter.ProductCategoryConverter;
import com.tic.entity.ProductCategory;
import com.tic.service.ProductCategoryService;

@Service
public class ProductCategoryImpl implements ProductCategoryService {
	
	@Autowired
	private ProductCategoryRepository productCategoryRepository;
	
	@Autowired
	private ProductCategoryConverter productCategoryConverter;
	
	@Override
	public List<ProductCategory> getAllProductCategories() {
		List<ProductCategory> productCategories = productCategoryRepository.findAll();
		productCategories.stream().forEach(productCategory-> {
			productCategoryConverter.toDto(productCategory);
		});
		return productCategories;
	}
	
	@Override
	public ProductCategory createOrModifycategory(ProductCategory productCategory) {
		if(null == productCategory.getCategoryId()) {
			productCategory.setDelFlag(false);
			productCategoryRepository.save(productCategory);
		}
		return productCategoryRepository.save(productCategory);
	}

}

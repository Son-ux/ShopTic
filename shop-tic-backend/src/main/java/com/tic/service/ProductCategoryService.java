package com.tic.service;

import java.util.List;

import com.tic.entity.ProductCategory;

public interface ProductCategoryService {
	List<ProductCategory> getAllProductCategories();
	ProductCategory createOrModifycategory(ProductCategory productCategory);
}
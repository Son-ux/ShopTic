package com.tic.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tic.entity.ProductCategory;
import com.tic.service.ProductCategoryService;

@RestController
@RequestMapping("/api/v1/product-category")
public class ProductCategoryApi {
	
	@Autowired
	private ProductCategoryService productCategoryService;
	
	@GetMapping
	public ResponseEntity<List<ProductCategory>> getProductCategory(){
		return ResponseEntity.ok(productCategoryService.getAllProductCategories());
	}
	
	@PostMapping
	public ResponseEntity<ProductCategory> getProduct(@RequestBody ProductCategory productCategory){
		return ResponseEntity.ok(productCategoryService.createOrModifycategory(productCategory));
	}
}
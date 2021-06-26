package com.tic.controller.api.client;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tic.entity.Product;
import com.tic.service.ProductSevice;

@RestController
@RequestMapping("/api/v1/client/product")
public class ProductApi {
	@Autowired
	private ProductSevice productService;
	
	@GetMapping
	public ResponseEntity<List<Product>> getAllProducts(){
		return ResponseEntity.ok(productService.getAll());
	}
	
	@PostMapping
	public ResponseEntity<Product> addNewProduct(){
		return null;
	}
}
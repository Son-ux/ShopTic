package com.tic.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tic.dto.ProductDto;
import com.tic.entity.Product;
import com.tic.service.ProductSevice;

@RestController
@RequestMapping("/client/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductApi {
	@Autowired
	private ProductSevice productService;
	
	@GetMapping
	public ResponseEntity<List<ProductDto>> getProductByList(){
		return ResponseEntity.ok(productService.getProductByList());
	}
	
	@PostMapping
	public ResponseEntity<Product> addNewProduct(){
		return null;
	}
	
	@GetMapping(value = "/getById/{productId}")
	public ResponseEntity<ProductDto> getProductById(@PathVariable(value = "productId") Integer productId) {
		return ResponseEntity.ok(productService.getProductById(productId));
	}
}
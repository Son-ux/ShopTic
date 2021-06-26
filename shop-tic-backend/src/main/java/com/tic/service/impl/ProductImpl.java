package com.tic.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tic.Repository.ProductRepository;
import com.tic.coverter.ProductConverter;
import com.tic.dto.ProductDto;
import com.tic.entity.Product;
import com.tic.service.ProductSevice;

@Service
public class ProductImpl implements ProductSevice {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ProductConverter productConverter;

	@Override
	public List<Product> getAll() {
		List<Product> products = productRepository.getAllForClient();
		List<ProductDto> temp = new ArrayList<ProductDto>();
		products.stream().forEach(product -> {
			temp.add(productConverter.toDto(product));
		});
		System.out.println(temp);
		return products;
	}

	@Override
	public Product insertOrUpdateProduct(Product product) {
		if(null == product.getProductId()) {
			product.setRated(0);
			product.setDelFlag(false);
		}
		return productRepository.save(product);
	}

}

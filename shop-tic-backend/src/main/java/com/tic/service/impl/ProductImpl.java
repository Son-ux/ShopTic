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
	public List<ProductDto> getProductByList() {
		List<Product> products = productRepository.getAllForClient();
		List<ProductDto> temp = new ArrayList<ProductDto>();
		products.stream().forEach(product -> {
			temp.add(productConverter.toDto(product));
		});
		return temp;
	}

	@Override
	public Product insertOrUpdateProduct(ProductDto productDto) {
		if(null == productDto.getProductId()) {
			productDto.setRated(0);
			productDto.setDelFlag(false);
		}
		Product product = productConverter.toEntity(productDto);
		return productRepository.save(product);
	}

	@Override
	public ProductDto getProductById(Integer productId) {
		Product product = productRepository.getOne(productId);
		ProductDto productdto = productConverter.toDto(product);
		return productdto;
	}

}

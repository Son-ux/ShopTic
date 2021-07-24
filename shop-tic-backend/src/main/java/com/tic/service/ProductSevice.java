package com.tic.service;

import java.util.List;

import com.tic.dto.ProductDto;
import com.tic.entity.Product;

public interface ProductSevice {
	
	/**
	 * Sequentially get the list of 20 products
	 * 
	 * @param
	 * 
	 * @return list of 20 product
	 * */
	List<ProductDto> getProductByList();
	
	/**
	 * 
	 * @param product
	 * @return
	 */
	Product insertOrUpdateProduct(ProductDto productDto);
	
	/**
	 * Get product by id product
	 * @param productId
	 * @return
	 */
	ProductDto getProductById(Integer productId);
}

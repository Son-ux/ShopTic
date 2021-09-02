package com.tic.service;

public interface ReviewService {
	
	/**
	 * count review of the product
	 * 
	 * @param productId
	 * @return return total review of product
	 * */
	Integer totalReviewByProductId(int productId);
}

package com.tic.service;

import java.util.List;
import com.tic.entity.Product;

public interface ProductSevice {
	List<Product> getAll();
	Product insertOrUpdateProduct(Product product);
}

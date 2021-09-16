package com.tic.Repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tic.entity.Product;
import com.tic.entity.ProductColor;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	
	@Query(value = ""
			+ "SELECT * FROM product p"
			+ " INNER JOIN product_category pc"
			+ " 	ON p.category_id = pc.category_id"
			+ "	WHERE pc.del_flag = 0"
			+ " 	AND p.del_flag = 0", nativeQuery = true)
	List<Product> getAllForClient();
	
	@Query(value = ""
			+ "SELECT pc.color_id, c.color_name FROM product_color pc "
			+ "INNER JOIN color c ON "
			+ "		c.color_id = pc.color_id "
			+ "WHERE pc.product_id = :productId", nativeQuery = true)
	Set<ProductColor> getProductColors(@Param("productId") int productId);
}

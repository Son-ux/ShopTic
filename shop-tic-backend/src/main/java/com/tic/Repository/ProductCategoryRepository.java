package com.tic.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tic.entity.ProductCategory;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer>{
	@Query(value = "SELECT w.product_quantity FROM warehouse w"
			 	 + " WHERE product_category.warehouse_id = :warehouseId", nativeQuery = true)
	Integer getProductQuantityByWarehouse(@Param("warehouseId") int categoryId);
}

package com.tic.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tic.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer>{
	
	@Query(value = "SELECT COUNT(1) FROM review_dat rd"
				 + " WHERE rd.product_id = :productId", nativeQuery = true)
	Integer countByProductId(@Param("productId") int productId);
}

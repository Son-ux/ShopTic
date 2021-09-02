package com.tic.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tic.entity.Warehouse;

@Repository
public interface WarehouseRepository extends JpaRepository<Warehouse, String>{
	
}

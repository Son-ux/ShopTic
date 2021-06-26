package com.tic.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "warehouse")
@Builder
public class Warehouse {
	
	@Id
	@Column(name = "warehouse_id")
	private String warehouseId;
	
	@Column(name = "product_quantity")
	private Integer productQuantity;
	
	@Builder.Default
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "warehouse")
	private Set<ProductCategory> productCategory = new HashSet<>();
}

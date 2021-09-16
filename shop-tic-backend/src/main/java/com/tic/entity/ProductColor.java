package com.tic.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "color")
@Builder
public class ProductColor {
	@Id
	@Column(name = "color_id")
	private String colorId;
	
	@Column(name = "color_name")
	private String colorName;
	
	@Column(name = "color_code")
	private String colorCode;
	
	@Builder.Default
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "product_color",
				joinColumns = @JoinColumn(name = "color_id"), 
				inverseJoinColumns = @JoinColumn(name = "product_id"))
	private Set<Product> listProducts = new HashSet<>();
}

package com.tic.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Table(name = "size")
@Builder
public class Size {
	@Id
	@Column(name = "size_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer sizeId;
	
	@Column(name = "size_number")
	private Integer sizeNumber;
	
	@Builder.Default
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "product_size", joinColumns = @JoinColumn(name = "size_id"), inverseJoinColumns = @JoinColumn(name = "product_id"))
	private Set<Product> listProducts = new HashSet<>();
}

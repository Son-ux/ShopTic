package com.tic.entity;

import java.util.Date;
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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
@Builder
public class Product {
	@Id
	@Column(name = "product_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer productId;
	
	@Column(name = "product_name")
	private String productName;
	
	@Column(name = "product_img")
	private String productImg;
	
	@Column(name = "short_decription")
	private String shortDescription;
	
	@Column(name = "product_price")
	private Double productPrice;
	
	@Column(name = "create_dat")
	private Date createDate;
	
	@Column(name = "mod_date")
	private Date modifyDate;
	
	@Column(name = "status")
	private Boolean status;
	
	@Column(name = "rated")
	private Integer rated;
	
	@Column(name = "del_flag")
	private Boolean delFlag;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "listProducts")
	private Set<ProductColor> listColor = new HashSet<>();
	
	@ManyToOne
	@JoinColumn(name = "category_id")
	private ProductCategory productCategory;
	
	@Builder.Default
	@ManyToMany(mappedBy = "listProducts", cascade = CascadeType.ALL)
	private Set<ProductColor>  listProductColor = new HashSet<>();

	@Builder.Default
	@ManyToMany(mappedBy = "listProducts")
	private Set<Size> listProductSize = new HashSet<>();
	
	@Builder.Default
	@OneToMany(mappedBy = "product")
	private Set<InvoiceDetail> billDetails = new HashSet<>();
	
	@Builder.Default
	@OneToMany(mappedBy = "product")
	private Set<Review> reviewDat = new HashSet<>();
}
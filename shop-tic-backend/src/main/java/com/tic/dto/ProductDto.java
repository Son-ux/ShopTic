package com.tic.dto;

import java.util.Date;

import com.tic.entity.ProductCategory;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDto {
	private Integer productId;
	private String productName;
	private String productImg;
	private String shortDescription;
	private Double productPrice;
	private Date createDate;
	private Date modifyDate;
	private Boolean delFlag;
	private Boolean status;
	private Integer rated;
	private Integer totalReview;
	private ProductCategory productCategory;
}

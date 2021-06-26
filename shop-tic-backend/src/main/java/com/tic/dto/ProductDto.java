package com.tic.dto;

import java.util.Date;

import com.tic.entity.ProductCategory;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ProductDto {
	private Integer productId;
	private String productName;
	private String productImg;
	private String shortDescription;
	private Date createDate;
	private Date modifyDate;
	private Boolean delFlag;
	private Boolean status;
	private Integer rated;
	private ProductCategory productCategory;
}

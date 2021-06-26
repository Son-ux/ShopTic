package com.tic.dto;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ProductCategoryDto {
	private Integer categoryId;
	private String categoryName;
	private String categoryCode;
	private Date createDate;
	private Date modDate;
	private Boolean delFlag;
}
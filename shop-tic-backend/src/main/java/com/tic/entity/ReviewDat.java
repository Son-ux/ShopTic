package com.tic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "review_dat")
@Builder
public class ReviewDat {
	@Id
	@Column(name = "review_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer reviewId;
	
	@Column(name = "review_text")
	private String reviewText;
	
	@Column(name = "create_by")
	private String createBy;
	
	@Column(name = "create_date")
	private String createDate;
	
	@Column(name = "modify_by")
	private String modifyBy;
	
	@Column(name = "modify_date")
	private String modifyDate;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private UserMst userReview;
}
package com.tic.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "invoice")
@Builder
public class Invoice {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "invoice_Id")
	private Integer billId;
	
	@Column(name = "user_id")
	private String userId;
	
	@Column(name = "total")
	private Double total;
	
	@Column(name = "quanty")
	private Integer quanty;
	
	@Column(name = "note")
	private String note;
	
	@Column(name = "create_by")
	private String createBy;
	
	@Column(name = "create_date", updatable = false)
	@CreatedDate
	private Date createdDate;
	
	@Column(name = "modify_date", updatable = true)
	private Date modifyDate;
	
	@Builder.Default
	@OneToMany(mappedBy = "bill")
	private Set<InvoiceDetail> billDetails = new HashSet<>();
}
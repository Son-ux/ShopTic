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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "user_mst")
@Builder
public class UserMst {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "password")
	private String userPsw;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "mail_address")
	private String mailAddress;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "gender")
	private Boolean gender;
	
	@Column(name = "user_del_flag")
	private String userDelFlag;
	
	@Column(name = "create_date")
	private String createDate;
	
	@Column(name = "mod_date")
	private String modDate;
	
	@Builder.Default
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Roles> listRoles = new HashSet<>();
	
	@Builder.Default
	@OneToMany(mappedBy = "userReview")
	private Set<Review> listReviews = new HashSet<>();
}
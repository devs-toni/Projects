package com.localhost.project.entity;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;

import com.localhost.project.service.UserService;

import ch.qos.logback.core.pattern.ReplacingCompositeConverter;

@Entity
@Table(name = "activities")
public class Activity {

	/**********************************************************************/ /* Properties */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String description;
	
	private ArrayList<String> images;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private UserLogin user;
	
	private Date date;

	/**********************************************************************/ /* Constructor */

	public Activity () {}
	
	public Activity(String description, UserLogin user, Date date) {
		super();
		this.description = description;
		this.user = user;
		this.date = date;
	}

	/**********************************************************************/ /* Getter & Setter */

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ArrayList<String> getImages() {
		return images;
	}

	public void setImages(ArrayList<String> images) {
		this.images = images;
	}
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Activity [title=" + description + "]";
	}
	
}

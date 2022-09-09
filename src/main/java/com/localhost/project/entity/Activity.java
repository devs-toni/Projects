package com.localhost.project.entity;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "activities")
public class Activity {

	/**********************************************************************/ /* Properties */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "El nombre es obligatorio")
	private String title;
	
	private String description;
	
	private ArrayList<String> images;

	/**********************************************************************/ /* Constructor */

	public Activity(String title, String description) {
		super();
		this.title = title;
		this.description = description;
	}

	/**********************************************************************/ /* Getter & Setter */

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	
	
	@Override
	public String toString() {
		return "Activity [title=" + title + "]";
	}
	
}

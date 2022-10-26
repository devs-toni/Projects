package com.localhost.project.entity;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="users")
public class UserLogin {

	private static final long serialVersionUID = 7191772507237259119L;

	/**********************************************************************/ /* Variables de Login */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "isOAuth")
	private Boolean isOauth;

	@NotNull(message = "El username es obligatorio")
	private String username;

	@Size(min = 4, message = "La contraseña debe tener al menos 4 caracteres")
	private String password;

	/**********************************************************************/ /* Variables de Usuario */

	@NotNull(message = "El nombre es obligatorio")
	@Size(min = 3, max = 40, message = "El nombre debe tener entre 3-40 caracteres")
	private String name;

	@Size(min = 3, max = 40, message = "El apellido debe tener entre 3-40 caracteres")
	private String surname;

	@Transient
	private String checkPassword;
	@Column(name = "image")
	private String profileImage;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable (name = "user_activities",joinColumns = {@JoinColumn(name = "user_id")}, inverseJoinColumns = {@JoinColumn(name = "activity_id")})
	private List<Activity> activities;
	/**********************************************************************/ /* Constructor */
	
	public UserLogin() {}
	
	public UserLogin(String username, String name, Boolean isOAuth) {
		super();
		this.username = username;
		this.name = name;
		this.isOauth = isOAuth;
	}

	/**********************************************************************/ /* Getter & Setter */

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getCheckPassword() {
		return checkPassword;
	}

	public void setCheckPassword(String checkPassword) {
		this.checkPassword = checkPassword;
	}

	public String getProfileImage() {
		return profileImage;
	}

	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}

	public Boolean getIsOauth() {
		return isOauth;
	}

	public void setIsOauth(Boolean isOauth) {
		this.isOauth = isOauth;
	}

	public List<Activity> getActivities() {
		return activities;
	}

	public void setActivities(List<Activity> activities) {
		this.activities = activities;
	}

	/**********************************************************************/ /* Otros */

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserLogin other = (UserLogin) obj;
		return Objects.equals(username, other.username);
	}

	@Override
	public String toString() {
		return "User [name=" + name + ", surname=" + surname + "]";
	}

}

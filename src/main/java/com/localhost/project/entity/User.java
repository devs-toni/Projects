package com.localhost.project.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user")
public class User implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 7191772507237259119L;

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull (message = "El nombre es obligatorio")
	@Size (min = 3, max = 15, message = "El nombre debe tener enter 3-15 caracteres")
	private String name;
	
	@NotNull (message = "El apellido es obligatorio")
	@Size (min = 5, max = 15, message = "El nombre debe tener enter 5-15 caracteres")
	private String surname;
	
	private Date date;
	
	@NotNull (message = "El email es obligatorio")
	private String email;

	@NotNull (message = "La contraseña es obligatorio")
	private String password;
	
    @Transient
    private String passwordConfirm;

    @ManyToMany
    private Set<Role> roles;
	
	private String bycicle;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPasswordConfirm() {
		return passwordConfirm;
	}

	public void setPasswordConfirm(String passwordConfirm) {
		this.passwordConfirm = passwordConfirm;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getBycicle() {
		return bycicle;
	}

	public void setBycicle(String bycicle) {
		this.bycicle = bycicle;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(email, other.email);
	}

	@Override
	public String toString() {
		return "User [name=" + name + ", surname=" + surname + "]";
	}

}

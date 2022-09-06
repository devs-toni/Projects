package com.localhost.project.entity;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class UserLogin {

	private static final long serialVersionUID = 7191772507237259119L;

	/**********************************************************************/ /* Variables de Login */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull(message = "El username es obligatorio")
	private String username;

	@NotNull(message = "La contraseña es obligatoria")
	@Size(min = 4, message = "La contraseña debe tener al menos 4 caracteres")
	private String password;

	/**********************************************************************/ /* Variables de Usuario */

	@NotNull(message = "El nombre es obligatorio")
	@Size(min = 3, max = 15, message = "El nombre debe tener entre 3-15 caracteres")
	private String name;

	@NotNull(message = "El apellido es obligatorio")
	@Size(min = 3, max = 15, message = "El apellido debe tener entre 3-40 caracteres")
	private String surname;

	@NotNull(message = "La contraseña es obligatoria")
	@Transient
	private String checkPassword;
	
	/**********************************************************************/ /* Constructor */
	
	public UserLogin() {}
	
	public UserLogin(String username,String password, String name) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
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

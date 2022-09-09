package com.localhost.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.localhost.project.entity.UserLogin;

@Repository
public interface UserRepository extends JpaRepository<UserLogin, Long>{

	UserLogin findByUsername(String username);
	
	Optional<UserLogin> findById(Long id);
	
}

package com.localhost.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.localhost.project.entity.UserLogin;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, Long>{

	UserLogin findByUsername(String username);
}

package com.localhost.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.localhost.project.entity.UserLogin;
import com.localhost.project.security.oauth.OAuthUser;

@Repository
public interface UserRepository extends JpaRepository<UserLogin, Long>{

	UserLogin findByUsername(String username);
}

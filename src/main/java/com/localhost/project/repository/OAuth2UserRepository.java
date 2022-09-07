package com.localhost.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.localhost.project.entity.OAuthUser;

@Repository
public interface OAuth2UserRepository extends JpaRepository<OAuthUser, Long>{
	
	OAuthUser findByUserName(String name); 
}

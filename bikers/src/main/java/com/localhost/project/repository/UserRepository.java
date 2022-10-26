package com.localhost.project.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.localhost.project.entity.UserLogin;

@Repository
public interface UserRepository extends JpaRepository<UserLogin, Long>{

	UserLogin findByUsername(String username);
	
	Optional<UserLogin> findById(Long id);

	@Modifying
	@Transactional
	@Query ("update UserLogin u set u.profileImage=:image where u.id =:id")
	void updateProfileImage(String image, Long id);
		
}

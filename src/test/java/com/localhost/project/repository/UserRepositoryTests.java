package com.localhost.project.repository;


import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.localhost.project.entity.User;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {
 
    @Autowired
    private TestEntityManager entityManager;
     
    @Autowired
    private UserRepository userRepository;
     
	@Test
	public void testCreateUser() {
		
		User user = new User();
		user.setUsername("devs.toni@gmail.com");
		user.setPassword("1234");
		user.setName("Toni");
		user.setSurname("Rufino");
		
		User savedUser = userRepository.save(user);
		User existUser = entityManager.find(User.class, savedUser.getId());
		assertThat(user.getUsername()).isEqualTo(existUser.getUsername());
	}
}

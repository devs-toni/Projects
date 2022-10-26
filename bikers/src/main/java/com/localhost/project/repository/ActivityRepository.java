package com.localhost.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.localhost.project.entity.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long>{
}

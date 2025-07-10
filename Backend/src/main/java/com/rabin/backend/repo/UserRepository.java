package com.rabin.backend.repo;

import com.rabin.backend.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserDetails, Integer> {
    UserDetails findByEmail(String email);

    UserDetails findByPhoneNumber(String phoneNumber);
}

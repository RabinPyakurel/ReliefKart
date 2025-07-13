package com.rabin.backend.repo;

import com.rabin.backend.model.CartItem;
import com.rabin.backend.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<CartItem,Integer> {
    List<CartItem>findByUserDetails(UserDetails user);
    void  deleteByUserDetails(UserDetails user);
    void deleteByUserDetailsAndProductId(UserDetails user, int productId);

}

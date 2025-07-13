package com.rabin.backend.service;

import com.rabin.backend.model.CartItem;
import com.rabin.backend.model.Product;
import com.rabin.backend.model.UserDetails;
import com.rabin.backend.repo.CartRepository;
import com.rabin.backend.repo.ProductRepository;
import com.rabin.backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Autowired
    public CartService(CartRepository cartRepository, ProductRepository productRepository, UserRepository userRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    public List<CartItem> getCartForUser(UserDetails user) {
        return cartRepository.findByUserDetails(user);
    }

    @Transactional
    public void saveCartItems(UserDetails user, List<CartItem> items) {
        cartRepository.deleteByUserDetails(user);

        for (CartItem item : items) {
            Product product = productRepository.findById(item.getProduct().getId())
                    .orElseThrow(() -> new RuntimeException("Product with ID " + item.getProduct().getId() + " not found"));
            cartRepository.save(new CartItem(user, product, item.getQuantity()));
        }
    }

    public void removeItem(UserDetails user, int productId) {
        cartRepository.deleteByUserDetailsAndProductId(user, productId);
    }

    public void clearCart(UserDetails user) {
        cartRepository.deleteByUserDetails(user);
    }
}

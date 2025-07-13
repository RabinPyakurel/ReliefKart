package com.rabin.backend.controller;

import com.rabin.backend.model.CartItem;
import com.rabin.backend.model.UserDetails;
import com.rabin.backend.repo.UserRepository;
import com.rabin.backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<CartItem> getCart(@RequestParam int userId) {
        UserDetails user = userRepository.findById(userId).orElseThrow();
        return cartService.getCartForUser(user);
    }

    @PostMapping
    public void updateCart(@RequestParam int userId, @RequestBody List<CartItem> items) {
        UserDetails user = userRepository.findById(userId).orElseThrow();
        cartService.saveCartItems(user, items);
    }

    @DeleteMapping("/{itemId}")
    public void removeItem(@RequestParam int userId, @PathVariable int itemId) {
        UserDetails user = userRepository.findById(userId).orElseThrow();
        cartService.removeItem(user, itemId);
    }

    @DeleteMapping
    public void clearCart(@RequestParam int userId) {
        UserDetails user = userRepository.findById(userId).orElseThrow();
        cartService.clearCart(user);
    }
}

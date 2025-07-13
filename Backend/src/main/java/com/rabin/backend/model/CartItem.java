package com.rabin.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    private UserDetails userDetails;

    @ManyToOne
    private Product product;

    private int quantity;

    public CartItem(UserDetails userDetails, Product product, int quantity) {
        this.userDetails = userDetails;
        this.product = product;
        this.quantity = quantity;
    }
}

package com.rabin.backend.controller;

import com.rabin.backend.model.Product;
import com.rabin.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {


    private final ProductService service;

    @Autowired
    public ProductController(ProductService service) {
        this.service = service;
    }

    @RequestMapping("/")
    public String greet(){
        return "Hai Hai";
    }
    @GetMapping("/products")
    public List<Product> getProducts(){
        return service.getAllProducts();
    }
}

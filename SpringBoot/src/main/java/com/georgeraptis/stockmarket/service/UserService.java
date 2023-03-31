package com.georgeraptis.stockmarket.service;

import com.georgeraptis.stockmarket.entity.User;

import java.util.List;

public interface UserService {

    public List<User> findAll();

    public User findById(int id);

    public void save(User user);

    public void deleteById(int id);

    public User getUserByUsernameAndPassword(String username, String password);

    public User getUserByUsername(String username);

}

package com.georgeraptis.stockmarket.dao;

import com.georgeraptis.stockmarket.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserDAO extends JpaRepository<User, Integer> {

    @Query("FROM User WHERE username=:username and password=:password")
    public User getUserByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    public User getUserByUsername(String  username);
}

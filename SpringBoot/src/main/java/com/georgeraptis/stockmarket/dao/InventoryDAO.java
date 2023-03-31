package com.georgeraptis.stockmarket.dao;

import com.georgeraptis.stockmarket.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryDAO extends JpaRepository<Inventory, Integer> {

    public List<Inventory> getByIUserId(int id);
}

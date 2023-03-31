package com.georgeraptis.stockmarket.service;

import com.georgeraptis.stockmarket.entity.Inventory;

import java.util.List;

public interface InventoryService {

    public List<Inventory> findAll();

    public Inventory findById(int id);

    public void save(Inventory inventory);

    public List<Inventory> getByIUserId(int id);

    public void deleteById(int id);
}

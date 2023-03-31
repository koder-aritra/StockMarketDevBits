package com.georgeraptis.stockmarket.service;

import com.georgeraptis.stockmarket.dao.InventoryDAO;
import com.georgeraptis.stockmarket.entity.Inventory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryServiceImpl implements InventoryService {

    private InventoryDAO inventoryDAO;

    public InventoryServiceImpl(InventoryDAO theInventoryDAO) {
        inventoryDAO = theInventoryDAO;
    }

    @Override
    public List<Inventory> findAll() {
        return inventoryDAO.findAll();
    }

    @Override
    public Inventory findById(int id) {
        Optional<Inventory> result = inventoryDAO.findById(id);
        Inventory inventory = null;
        if (result.isPresent()) {
            inventory = result.get();
        } else {
            throw new RuntimeException("inventory with id: " + id + " not found");
        }
        return inventory;
    }

    @Override
    public void save(Inventory inventory) {
        inventoryDAO.save(inventory);
    }

    @Override
    public void deleteById(int id) {
        inventoryDAO.deleteById(id);
    }

    @Override
    public List<Inventory> getByIUserId(int id) {
        return inventoryDAO.getByIUserId(id);
    }
}

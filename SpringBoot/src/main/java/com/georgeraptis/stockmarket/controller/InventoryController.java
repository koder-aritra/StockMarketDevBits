package com.georgeraptis.stockmarket.controller;

import com.georgeraptis.stockmarket.entity.Inventory;
import com.georgeraptis.stockmarket.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class InventoryController {

    private InventoryService inventoryService;

    @Autowired
    public InventoryController(InventoryService theInventoryService) {
        inventoryService = theInventoryService;
    }

    @GetMapping("/invs")
    public List<Inventory> findAll() {
      return inventoryService.findAll();
    }

    @GetMapping("/inv/{invId}")
    public Inventory getInventory(@PathVariable int invId) {
        Inventory inventory = inventoryService.findById(invId);
        if (inventory == null) {
            throw new RuntimeException("inventory with id: " + invId + " not found");
        }
        return inventory;
    }

    @PostMapping("/inv")
    public Inventory addInventory(@RequestBody Inventory inventory) {
        inventory.setId(0);
        Date date= new Date();
        long time = date.getTime();
        Timestamp timeCreated = new Timestamp(time);
        inventory.setDate(timeCreated);
        inventoryService.save(inventory);
        return  inventory;
    }

    @PutMapping("/inv")
    public Inventory updateInventory(@RequestBody Inventory inventory) {
        inventoryService.save(inventory);
        return inventory;
    }

    @DeleteMapping("/inv/{invId}")
    public int deleteInventory(@PathVariable int invId) {
        Inventory tempInventory = inventoryService.findById(invId);
        if (tempInventory == null) {
            throw new RuntimeException("inventory with id: " + invId + " not found");
        }
        inventoryService.deleteById(invId);
        return 0;
    }

    @GetMapping("/inv/user/{userId}")
    public List<Inventory> getInventoryByUserId(@PathVariable int userId) {
       return inventoryService.getByIUserId(userId);
    }
}

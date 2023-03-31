package com.georgeraptis.stockmarket.service;

import com.georgeraptis.stockmarket.entity.Wallet;

import java.util.List;

public interface WalletService {

    public List<Wallet> findAll();

    public Wallet findById(int id);

    public void save(Wallet wallet);

    public void deleteById(int id);

    public Wallet getByWUserId(int id);
}

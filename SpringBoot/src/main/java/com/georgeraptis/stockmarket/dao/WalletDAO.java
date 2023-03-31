package com.georgeraptis.stockmarket.dao;

import com.georgeraptis.stockmarket.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletDAO extends JpaRepository<Wallet, Integer> {

    public Wallet getByWUserId(int id);
}

package com.georgeraptis.stockmarket.service;

import com.georgeraptis.stockmarket.dao.WalletDAO;
import com.georgeraptis.stockmarket.entity.Wallet;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WalletServiceImpl implements WalletService {

    private WalletDAO walletDAO;

    public WalletServiceImpl(WalletDAO theWalletDAO) {
        walletDAO = theWalletDAO;
    }

    @Override
    public List<Wallet> findAll() {
        return walletDAO.findAll();
    }

    @Override
    public void save(Wallet wallet) {
        walletDAO.save(wallet);
    }

    @Override
    public void deleteById(int id) {
        walletDAO.deleteById(id);
    }

    @Override
    public Wallet findById(int id) {
        Optional<Wallet> result = walletDAO.findById(id);
        Wallet wallet = null;
        if (result.isPresent()) {
            wallet = result.get();
        } else {
            throw new RuntimeException("wallet with id: " + id + " not found");
        }
        return wallet;
    }

    @Override
    public Wallet getByWUserId(int id) {
        return walletDAO.getByWUserId(id);
    }
}

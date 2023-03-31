package com.georgeraptis.stockmarket.controller;

import com.georgeraptis.stockmarket.entity.Wallet;
import com.georgeraptis.stockmarket.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class WalletController {

    private WalletService walletService;

    @Autowired
    public WalletController(WalletService theWalletService) {
        walletService = theWalletService;
    }

    @GetMapping("/wallets")
    public List<Wallet> findAll() {
       return walletService.findAll();
    }

    @GetMapping("/wallet/{walletId}")
    public Wallet getWallet(@PathVariable int walletId) {
        Wallet wallet = walletService.findById(walletId);
        if (wallet == null) {
            throw new RuntimeException("wallet with id: " + walletId + " not found");
        }
        return wallet;
    }

    @PostMapping("/wallet")
    public Wallet addWallet(@RequestBody Wallet wallet) {
        wallet.setId(0);
        walletService.save(wallet);
        return wallet;
    }

    @PutMapping("/wallet")
    public Wallet updateWallet(@RequestBody Wallet wallet) {
        walletService.save(wallet);
        return wallet;
    }

    @DeleteMapping("/wallet")
    public int deleteWallet(@PathVariable int id) {
        Wallet tempWallet = walletService.findById(id);
        if (tempWallet == null) {
            throw new RuntimeException("wallet with id: " + id + " not found");
        }
        walletService.deleteById(id);
        return 0;
    }

    @GetMapping("/wallet/user/{userId}")
    public Wallet getWalletByUserId(@PathVariable int userId) {
       return walletService.getByWUserId(userId);
    }
}

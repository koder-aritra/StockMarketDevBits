package com.georgeraptis.stockmarket.entity;

import javax.persistence.*;

@Entity
@Table(name = "wallet")
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "w_id")
    private int id;

    @Column(name = "w_user_id")
    private int wUserId;

    @Column(name = "w_amount")
    private double amount;

    public Wallet() {
    }

    public Wallet(int wUserId, int amount) {
        this.wUserId = wUserId;
        this.amount = amount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getwUserId() {
        return wUserId;
    }

    public void setwUserId(int wUserId) {
        this.wUserId = wUserId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Wallet{" +
                "id=" + id +
                ", wUserId=" + wUserId +
                ", amount=" + amount +
                '}';
    }
}

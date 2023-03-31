package com.georgeraptis.stockmarket.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Inventory")
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "i_id")
    private int id;

    @Column(name = "i_user_id")
    private int iUserId;

    @Column(name = "i_stock_name")
    private String name;

    @Column(name = "i_stock_symbol")
    private String symbol;

    @Column(name = "i_stock_price")
    private double price;

    @Column(name = "i_stock_date")
    private Timestamp date;

    public Inventory() {
    }

    public Inventory(int iUserId, String name, String symbol, int price, Timestamp date) {
        this.iUserId = iUserId;
        this.name = name;
        this.symbol = symbol;
        this.price = price;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getiUserId() {
        return iUserId;
    }

    public void setiUserId(int iUserId) {
        this.iUserId = iUserId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Inventory{" +
                "id=" + id +
                ", iUserId=" + iUserId +
                ", name='" + name + '\'' +
                ", symbol='" + symbol + '\'' +
                ", price=" + price +
                ", date=" + date +
                '}';
    }
}

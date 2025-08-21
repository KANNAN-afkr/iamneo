package com.examly.springapp.service;

import com.examly.springapp.model.Gift;
import com.examly.springapp.repository.GiftRepo;
import com.examly.springapp.exception.InvalidPhoneNumberException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GiftService {
    
    @Autowired
    private GiftRepo giftRepo;
    
    public Gift addGift(Gift gift) {
        if (gift.getPhoneNumber() == null || !gift.getPhoneNumber().startsWith("+91")) {
            throw new InvalidPhoneNumberException("Phone number must start with +91.");
        }
        return giftRepo.save(gift);
    }
    
    public List<Gift> getAllGifts() {
        return giftRepo.findAll();
    }
}
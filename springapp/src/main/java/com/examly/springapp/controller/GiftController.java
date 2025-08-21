package com.examly.springapp.controller;

import com.examly.springapp.model.Gift;
import com.examly.springapp.service.GiftService;
import com.examly.springapp.exception.InvalidPhoneNumberException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GiftController {
    
    @Autowired
    private GiftService giftService;
    
    @PostMapping("/addGiftoo")
    public ResponseEntity<?> addGift(@RequestBody Gift gift) {
        try {
            Gift savedGift = giftService.addGift(gift);
            return new ResponseEntity<>(savedGift, HttpStatus.CREATED);
        } catch (InvalidPhoneNumberException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/getAllGifts")
    public ResponseEntity<?> getAllGifts() {
        try {
            List<Gift> gifts = giftService.getAllGifts();
            return new ResponseEntity<>(gifts, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @ExceptionHandler(InvalidPhoneNumberException.class)
    public ResponseEntity<String> handleInvalidPhoneNumber(InvalidPhoneNumberException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
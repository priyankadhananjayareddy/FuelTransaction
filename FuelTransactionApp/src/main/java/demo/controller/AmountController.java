package demo.controller;

import demo.calculate.CalculateAmount;
import demo.result.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/invoice")
@CrossOrigin(origins = "http://localhost:3000/")
public class AmountController {

    @Autowired
    private final CalculateAmount calculateAmount;

    @Autowired
    public AmountController(CalculateAmount calculateAmount) {
        this.calculateAmount = calculateAmount;
    }

    @PostMapping("/receiptResponse")
    public Invoice receiptResponse(@RequestBody RequestBodyClass requestBody) {
        double gallonCapacity = requestBody.getGallonCapacity();
        double noOfGallonsInVehicle = requestBody.getNoOfGallonsInVehicle();

        // Assuming you have a method to generate and return a list of invoices
        // For now, let's return an empty list
        return calculateAmount.getInvoice(gallonCapacity, noOfGallonsInVehicle);
    }
}

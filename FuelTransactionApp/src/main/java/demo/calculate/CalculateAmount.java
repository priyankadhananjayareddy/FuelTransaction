package demo.calculate;


import demo.config.Configuration;
import demo.result.Invoice;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class CalculateAmount {
    public Invoice getInvoice(double gallonCapacity, double noOfGallonsInVehicle){
        double totalPrice= (gallonCapacity - noOfGallonsInVehicle)* Configuration.PRICE_PER_GALLON;
        Invoice invoice = new Invoice();
        invoice.setDate(new Date());
        invoice.setPricePerGallon(Configuration.PRICE_PER_GALLON);
        invoice.setNoOfGallonsToBeFilled(gallonCapacity - noOfGallonsInVehicle);
        invoice.setTotalPrice(totalPrice);
        return invoice;
    }


}

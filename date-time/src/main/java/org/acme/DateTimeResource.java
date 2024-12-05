package org.acme;


import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

//api/timezone/Asia/Kolkata
@Path("api")
public class DateTimeResource {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("timezone/Asia/Kolkata")
    public String getCurrentDateTime() {
        ZonedDateTime now = ZonedDateTime.now();
        String formattedDateTime = now.format(DateTimeFormatter.ISO_OFFSET_DATE_TIME);
        return "{\"datetime\": \"" + formattedDateTime + "\"}";
    }

}

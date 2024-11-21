import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class BookingHandler {
    public void handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Logic for booking handling
        response.setContentType("application/json");
        response.getWriter().write("{\"message\": \"Booking processed successfully\"}");
    }
}

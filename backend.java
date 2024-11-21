import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/handler") // Map this servlet to a specific URL pattern
public class MainHandlerServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Handle POST requests
        BookingHandler bookingHandler = new BookingHandler();
        bookingHandler.handleRequest(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Handle GET requests
        String action = request.getParameter("action");
        
        if (action == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST); // 400 Bad Request
            response.getWriter().write("{\"error\": \"Invalid action\"}");
            return;
        }

        switch (action) {
            case "getBookingStatus":
                BookingRetrieval bookingRetrieval = new BookingRetrieval();
                bookingRetrieval.handleRequest(request, response);
                break;

            case "getTrainStatus":
                TrainRetrieval trainRetrieval = new TrainRetrieval();
                trainRetrieval.handleRequest(request, response);
                break;

            default:
                response.setStatus(HttpServletResponse.SC_NOT_FOUND); // 404 Not Found
                response.getWriter().write("{\"error\": \"Action not found\"}");
        }
    }
}

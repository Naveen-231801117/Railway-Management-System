import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class TrainRetrieval {
    public void handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Logic for train status retrieval
        response.setContentType("application/json");
        response.getWriter().write("{\"status\": \"Train details retrieved\"}");
    }
}

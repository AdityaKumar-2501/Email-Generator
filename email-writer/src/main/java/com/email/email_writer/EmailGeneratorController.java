package com.email.email_writer;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailGeneratorController {
    private final EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    ResponseEntity<String> getResponse(@RequestBody EmailRequest emailRequest){
        String response = emailGeneratorService.generateEmailResponse(emailRequest);
        return ResponseEntity.ok(response);
    }
}

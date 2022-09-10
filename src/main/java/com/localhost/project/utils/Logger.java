package com.localhost.project.utils;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class Logger {
	
	@Value("${app.logfile}")
	private String logfile;
	@Value("${app.debug}")
	private Boolean debug;
	
	public void debug(String entry) {
		FileWriter file;
		try {
			file = new FileWriter(logfile, true);
			try {
				if (debug) {
					file.write(new Date().toString() + " - " + entry + "<br />");
					System.out.println(entry);
					file.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (IOException e) {
			System.out.println("No se ha podido crear el objeto FileWriter de Logger");
		}
	}
}

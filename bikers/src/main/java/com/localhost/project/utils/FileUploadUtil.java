package com.localhost.project.utils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileUploadUtil {

	@Autowired
	private Logger logger;

	public void save(String uploadDir, String fileName, MultipartFile file) {
		Path uploadPath = Paths.get(uploadDir);

		try (InputStream inputStream = file.getInputStream()) {
			if (!Files.exists(uploadPath)) {
				Files.createDirectories(uploadPath);
				logger.debug("Creando directorio de usuario para foto de perfil");
			}

			Path filePath = uploadPath.resolve(fileName);
			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
			logger.debug("La imagen de perfil se ha insertado correctamente en el directorio");

		} catch (IOException ioe) {
			logger.debug("Could not save image file: " + fileName);
		}
	}

	public void delete(String deleteDir, String fileName) {
		Path deletePath = Paths.get(deleteDir);

		try {
			Path filePath = deletePath.resolve(fileName);		
			Files.delete(filePath);
		} catch (IOException ioe) {
			logger.debug("Could not save image file: " + fileName);
		}
	}
	
	public void delete(String pathName) {
		File file = new File(pathName);		
		file.delete();
		logger.debug("La imagen " + file + " ha sido eliminada");
	}
}

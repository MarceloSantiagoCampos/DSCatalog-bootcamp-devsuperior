package com.devsupeior.dscatalog.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsupeior.dscatalog.dto.CategoryDTO;
import com.devsupeior.dscatalog.services.CategoryService;

@RestController
@RequestMapping(value = "/categories")
public class CaterogyResource {
	
	@Autowired
	private CategoryService service;
	
	
	@GetMapping
	public ResponseEntity<List<CategoryDTO>> findAll(){
		List<CategoryDTO> list = service.findAll();		
		return ResponseEntity.ok().body(list);
	}
	
	
}

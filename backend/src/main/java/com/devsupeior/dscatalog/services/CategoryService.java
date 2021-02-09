package com.devsupeior.dscatalog.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsupeior.dscatalog.dto.CategoryDTO;
import com.devsupeior.dscatalog.entities.Category;
import com.devsupeior.dscatalog.repositories.CategoryRepository;
import com.devsupeior.dscatalog.services.exceptions.EntityNotFoundException;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository repository;
	
	@Transactional(readOnly = true) // Não há a necessidade de travar o banco de dados somente para fazer a leitura, portanto é colocado o readOnly
	public List<CategoryDTO> findAll(){

		List<Category> list = repository.findAll();
		
		/**
		List<CategoryDTO> listDto = new ArrayList<>();
		for (Category cat : list) {
			listDto.add(new CategoryDTO(cat));
			
		return listDto;
		}
		*/
		// ou 
		/**
		List<CategoryDTO> listDto = list.stream ().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
		
		return listDto;
		*/
		//ou ainda
		
		return list.stream ().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public CategoryDTO findById(Long id) {
		Optional<Category> obj = repository.findById(id);
		Category entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity Not Found"));
		return new CategoryDTO(entity);
	}
	
}

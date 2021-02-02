package com.devsupeior.dscatalog.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsupeior.dscatalog.entities.Category;
import com.devsupeior.dscatalog.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository repository;
	
	@Transactional(readOnly = true) // Não há a necessidade de travar o banco de dados somente para fazer a leitura, portanto é colocado o readOnly
	public List<Category> findAll(){
		return repository.findAll();
	}
	
}

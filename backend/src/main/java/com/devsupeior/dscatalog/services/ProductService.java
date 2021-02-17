package com.devsupeior.dscatalog.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsupeior.dscatalog.dto.ProductDTO;
import com.devsupeior.dscatalog.entities.Product;
import com.devsupeior.dscatalog.repositories.ProductRepository;
import com.devsupeior.dscatalog.services.exceptions.DatabaseException;
import com.devsupeior.dscatalog.services.exceptions.ResourceNotFoundException;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;
	
	@Transactional(readOnly = true) // Não há a necessidade de travar o banco de dados somente para fazer a leitura, portanto é colocado o readOnly
	public Page<ProductDTO> findAllPaged(PageRequest pageRequest){

		Page<Product> page = repository.findAll(pageRequest);
				
		return page.map(x -> new ProductDTO(x));
	}

	@Transactional(readOnly = true)
	public ProductDTO findById(Long id) {
		Optional<Product> obj = repository.findById(id);
		Product entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
		return new ProductDTO(entity, entity.getCategories());
	}

	@Transactional
	public ProductDTO insert(ProductDTO dto) {
		Product entity = new Product();
		//entity.setName(dto.getName());
		entity = repository.save(entity);
		
		return new ProductDTO(entity);
	}

	@Transactional
	public ProductDTO update(Long id, ProductDTO dto) {
		try {
			Product entity = repository.getOne(id);
			//entity.setName(dto.getName());
			entity = repository.save(entity);
			
			return new ProductDTO(entity);
			
		}catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("ID not found" + id);			
		}
		
		
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
			
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("ID not found" + id);
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity Violation");
		}
	}
	
	
	
	
	
	
	
	
	
	
}

package org.launchcode.constructionestimator.models.data;

import org.launchcode.constructionestimator.models.Labor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaborRepository extends CrudRepository<Labor, Integer> {
}

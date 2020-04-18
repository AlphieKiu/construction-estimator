package org.launchcode.constructionestimator.controllers;

import org.launchcode.constructionestimator.models.Project;
import org.launchcode.constructionestimator.models.data.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    // Use this with @RequestParam to search all projects by field, leave params empty to return all projects
    @GetMapping
    public ResponseEntity getProjects() {

        return new ResponseEntity(projectRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity getProjectById(@PathVariable("projectId") int projectId) {
        if(projectRepository.findById(projectId).isEmpty()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND); // returns 404 if id does not exist in database
        } else {
            return new ResponseEntity(projectRepository.findById(projectId), HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity postProject(@RequestBody Project project) {
        projectRepository.save(project);
        Integer id = project.getId();
        Map<String, String> map = Collections.singletonMap("id", id.toString());
        return new ResponseEntity(map, HttpStatus.CREATED);
    }


    // TODO: Delete and put mapping

}
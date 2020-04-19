import { Component, OnInit } from '@angular/core';
import { Project } from '../../project';

import { Router, RouterModule, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  id: number = 12;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
 
  }

  saveProject(name: string, roomType: string, roomLength: number, roomWidth: number, roomHeight: number) {
    let project = new Project(name, roomType, roomLength, roomWidth, roomHeight);
    let id: number;
    console.log("saved project", project);
    // TODO: POST TO SERVER
    fetch('http://localhost:8080/api/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(project),
    }).then(function(response) {
      // get id number from response here { id: idNumber }
      response.json().then(function(json) {
        //I tried using a forEach loop and the json wasn't gathering the id. I think it's because the one object isn't stored in an array? Not sure though
        project.id = Number(json.id);
        //this project.id gets changed, as it should. I tried using an id field on the component class itself, but I encountered the same issue (see below)
        console.log("json ids", project.id);
      }.bind(this));
    }.bind(this)).then(function(data) {
      console.log('Success:', data);
    }).catch(function(error) {
      console.error('Error:', error);
    });
    //This project.id gets set back to its initial value of undefined. The this.id field did the same thing - it changed and then got reset to 12 on this line.
    console.log('id assigned', project.id);
    //this router link works when the id is given a value before running the fetch, but occassionally it will send you back to the project/create?roomType=whatever which is weird...
    this.router.navigate([`project/add-details/${project.id}`]);
  }

}

import { ProjectComponent } from './projectcomponent';

export class Project {

    id: number;
    name: string;
    roomType: string;
    roomLength: number;
    roomWidth: number;
    roomHeight: number;
    projectComponents: ProjectComponent[];

    constructor(name: string, roomType: string, roomLength: number, roomWidth: number, roomHeight: number) {
        this.name = name;
        this.roomType = roomType;
        this.roomLength = roomLength;
        this.roomWidth = roomWidth;
        this.roomHeight = roomHeight;
    }

    addProjectComponent(projectComponent: ProjectComponent) {
        this.projectComponents.push(projectComponent);
    }
}


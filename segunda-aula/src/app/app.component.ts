import { Component } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newCourse: Course;
  courses: Course[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.newCourse = new Course();
    this.courses = this.courseService.getAll();
  }

  save() {
    if (!this.newCourse.id) {
      this.newCourse.id = (new Date()).getTime();
      this.courseService.save(this.newCourse);

    } else {
      this.courseService.edit(this.newCourse);
    }

    this.newCourse = new Course();
  }

  delete(course : Course) {
    this.courseService.delete(course);
  }

  edit(course : Course) {
    this.newCourse = new Course(course.id, course.name, course.workload);
  }

}

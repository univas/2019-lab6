import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private course: Course[] = [];

  constructor() { }

  getAll() {
    return this.course;
  }

  save(course : Course) {
    this.course.push(course);
  }

  edit(course : Course) {
    let oldCourse = this.course.find(c => c.id === course.id);
    oldCourse.name = course.name;
    oldCourse.workload = course.workload;
  }

  delete(course : Course) {
    let index = this.course.findIndex(c => c.id === course.id);
    this.course.splice(index, 1);
  }
}

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

type TimeSlot = "8:30-10:00" | "10:15-11:45" | "12:15-13:45" | "14:00-15:30" | "15:45-17:15";

type CourseType = "Lecture" | "Seminar" | "Lab" | "Practice";

type Professor = {
    id: number;
    name: string;
    department: string;
}

type Classroom = {
    number: string;
    capacity: number;
    hasProjector: boolean;
}

type Course = {
    id: number;
    name: string;
    type: CourseType;
}

type Lesson = {
    courseId: number;
    professorId: number;
    classroomNumber: string;
    dayOfWeek: DayOfWeek;
    timeSlot: TimeSlot;
}

const professors: Professor[] = [];
const classrooms: Classroom[] = [];
const courses: Course[] = [];
const schedule: Lesson[] = [];

const addProfessor = (professor: Professor): void => {
    professors.push(professor);
}

const addLesson = (lesson: Lesson): boolean => {
    if (schedule.includes(lesson)) {
        return false;
    }
    schedule.push(lesson);
    return true;
}

const findAvailableClassroom = (timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] => {
    const occupiedClassrooms = schedule
        .filter((lesson: Lesson) => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map((lesson: Lesson) => lesson.classroomNumber);

    return classrooms
        .map((classroom: Classroom) => classroom.number)
        .filter((classroomNumber: string) => !occupiedClassrooms.includes(classroomNumber))
}

const getProfessorSchedule = (professorId: number): Lesson[] => {
    return schedule.filter((lesson: Lesson) => lesson.professorId === professorId);
}
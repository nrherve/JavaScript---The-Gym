function lineupStudents(students) {
  let studentArray = typeof students === "string" ? students.split(" ") : students;

  return studentArray.sort((a, b) => {
    if (b.length !== a.length) {
      return b.length - a.length;
    }

    return b.localeCompare(a);
  });
}
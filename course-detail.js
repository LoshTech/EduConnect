document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const courseId = parseInt(params.get('id'));

  const courseDetailDiv = document.getElementById('course-detail');

  fetch('data/courses.json')
    .then(response => response.json())
    .then(courses => {
      const course = courses.find(c => c.id === courseId);

      if (course) {
        courseDetailDiv.innerHTML = `
          <div class="course-detail">
            <img src="${course.image}" alt="${course.title}" />
            <h2>${course.title}</h2>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p>${course.description}</p>
          </div>
        `;
      } else {
        courseDetailDiv.innerHTML = '<p>Course not found.</p>';
      }
    })
    .catch(err => {
      courseDetailDiv.innerHTML = '<p>Failed to load course data.</p>';
      console.error(err);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const coursesList = document.getElementById('courses-list');

  fetch('data/courses.json')
    .then(response => response.json())
    .then(courses => {
      courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';

        card.innerHTML = `
          <img src="${course.image}" alt="${course.title}" class="course-image" />
          <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-instructor">Instructor: ${course.instructor}</p>
            <p class="course-desc">${course.description}</p>
          </div>
        `;

        card.addEventListener('click', () => {
          window.location.href = `course-detail.html?id=${course.id}`;
        });

        coursesList.appendChild(card);
      });
    })
    .catch(err => {
      coursesList.innerHTML = '<p>Failed to load courses.</p>';
      console.error(err);
    });
});

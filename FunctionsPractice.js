// CeroUno.io
// - 1. Send an acceptance e-mail to all students
// - 2. What is the average age of all the students ?
// - 3. What should be our priority programming language ?

function sendEmail (student) {
  console.log(`Dear ${student.name}, you are accepted at CeroUno.io`);
  console.log(`Email sent to: ${student.email}`);
}

const students = [
  { name: 'Juan', age: 18, email: 'juan@cerouno.io', interests: ['php', 'ruby']},
  { name: 'Elizabeth', age: 22, email: 'elizabeth@cerouno.io', interests: ['ruby', 'js']},
  { name: 'Erika': age: 17, email: 'erika@cerouno.io', interests: ['js', 'go']},
  { name: 'Pedro', age: 30, email: 'pedro@cerounio.io', interests: ['go', 'elixir']},
  { name: 'Fernanda', age: 25 email: 'fernanda@cerouno.io', interests: ['java', 'pearl']}
];

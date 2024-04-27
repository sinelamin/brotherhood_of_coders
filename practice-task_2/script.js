"use strict";

// Небольшое пояснение
// Так как знаком с принципом едино ответственности, были сомнения по реализации всех действий в одной функции
// Но по итогу, решил не делать голову и максимально строго следовать описанию ТЗ второго задания.
// То есть, реализовать все описанное в задаче в рамках только одной функции, а именно получение данных и преобразование их в таблицу, без html.
// Естественно, понимаю, что для работы с реальными задачами такое нужно уточнять, но в рамках тестового позволили себе отпустить этот момент

async function getDataFetch() {
  const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch currency rates');
    }
    const data = await response.json();

    const table = document.createElement('table');
    document.querySelector('body').prepend(table);

    table.classList.add('table');
    table.innerHTML = `
    <thead class="table-header">
      <tr class="table-header__list">
        <th class="table-header__item">userId</th>
        <th class="table-header__item">id</th>
        <th class="table-header__item">title</th>
        <th class="table-header__item">body</th>
      </tr>
    </thead>
    <tbody class="table-body">
    </tbody>
    `

    data.forEach(obj => {
      const tr = document.createElement('tr');

      tr.classList.add('table-body__list');
      tr.innerHTML = `
        <tr class="table-body__list">
          <td class="table-body__item">${obj['userId']}</td>
          <td class="table-body__item">${obj['id']}</td>
          <td class="table-body__item">${obj['title']}</td>
          <td class="table-body__item">${obj['body']}</td>
        </tr>
      `

      document.querySelector('.table-body').append(tr);
    });
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    throw error;
  }
}

getDataFetch();
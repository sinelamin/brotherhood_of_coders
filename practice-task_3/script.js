"use strict";

// --------------------------------------------------------------------- get data
async function getDataFetch() {
  const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

// --------------------------------------------------------------------- create table


const tableBody = document.querySelector('.table-body');

async function createTable(substring = "", column = null, sort = false) {
  const data = await getDataFetch();

  const newData = substring ? search(data, substring) : data;

  if (sort && column) {
    sortTable(newData, column);
  }

  newData.forEach(obj => {
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

    tableBody.append(tr);
  });
}


// --------------------------------------------------------------------- clear Table

function clearTable() {
  tableBody.innerHTML = '';
  tableHeaderItems.forEach(tableHeaderItem => {
    tableHeaderItem.classList.remove('table-header__item--active-down')
    tableHeaderItem.classList.remove('table-header__item--active-up')
  });
}


// --------------------------------------------------------------------- sort

const tableHeaderItems = document.querySelectorAll('.table-header__item');
let ascending = true;

function sortTable(data, column) {
  if (ascending) {
    ascending = false;

    if (typeof data[0][column] == 'string') {
      return data.sort((a, b) => b[column].localeCompare(a[column]));
    }

    return data.sort((a, b) => b[column] - a[column]);
  } else {
    ascending = true;

    if (typeof data[0][column] == 'string') {
      return data.sort((a, b) => a[column].localeCompare(b[column]));
    }

    return data.sort((a, b) => a[column] - b[column]);
  }
}

tableHeaderItems.forEach(tableHeaderItem => {
  tableHeaderItem.addEventListener('click', (e) => {
    const columnName = e.target.innerHTML;
    clearTable();
    createTable("", columnName, true);

    if (ascending) {
      e.target.classList.add('table-header__item--active-down');
    } else {
      e.target.classList.add('table-header__item--active-up');
    }
  })
})


// --------------------------------------------------------------------- search

const searchInput = document.querySelector('.input-search');

searchInput.addEventListener('input', (e) => {
  const searchValue = e.target.value;

  clearTable();
  if (searchValue.length >= 3) {
    createTable(searchValue);
  } else {
    createTable();
  }
});

function search(data, substring) {
  const filtered = data.filter(obj => obj['title'].includes(substring));

  return filtered;
}


createTable();
const BASE_URL = '/api/expenses';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(exp) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(exp)
  }).then(res => res.json());
}

export function update(exp) {
  return fetch(`${BASE_URL}/${exp._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(exp)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
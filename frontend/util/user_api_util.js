export const fetchUser = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user_id}`
  });
}

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`
  });
}

export const updateUser = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: formData,
    contentType: false,
    processData: false
  })
}
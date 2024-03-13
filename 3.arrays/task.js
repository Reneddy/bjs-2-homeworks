function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function getUsersNamesInAgeRange(users, gender) {
  let filteredUsers = users.filter(user => user.gender === gender);
  if (filteredUsers.length===0) {
  return 0;
  }
  let totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
  let averageAge = totalAge / filteredUsers.length;
  return averageAge;
  
}

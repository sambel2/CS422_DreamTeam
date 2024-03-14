
// initialize users from localStorage to use
const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');

// save users back to localStorage
const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));

export const createAccount = (newUserData) => {
    const users = getUsers();
    const userExists = users.some(u => u.username === newUserData.username);
    
    if (!userExists) {
        users.push(newUserData); 
        saveUsers(users); // updated users list
        return true;
    } else {
        return false; // user already exists
    }
};

export const login = (username, password) => {
    console.log("Attempting to log in with", username, password);
    const users = getUsers();
    const userFound = users.find(u => u.username === username && u.password === password);
    
    if (userFound) {
        localStorage.setItem('currentUser', JSON.stringify(userFound)); // user session
        return true;
    } else {
        return false; // login failed :(
    }
};

export const isLoggedIn = () => {
    return localStorage.getItem('currentUser') !== null || sessionStorage.getItem('currentUser') !== null;
};

export const logout = () => {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
};

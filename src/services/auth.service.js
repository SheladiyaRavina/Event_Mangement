const AuthService = {
    register(username, email, password) {
      const user = { username, email, password };  // Nu slaan we ook het wachtwoord op
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return Promise.resolve(user);
    },
  
    login(email, password) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);  // Controleer ook het wachtwoord
      if (user) {
        const { password, ...userWithoutPassword } = user;  // Verwijder het wachtwoord voordat we het in de sessie opslaan
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        return Promise.resolve(userWithoutPassword);
      } else {
        return Promise.reject('Invalid email or password');
      }
    },
  
    logout() {
      localStorage.removeItem('user');
    },
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));
    }
  };
  
  export default AuthService;
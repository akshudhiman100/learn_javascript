const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "user.json");

/* ---------- Helper Functions ---------- */

// Read JSON file
function readFile() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Write JSON file
function writeFile(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/* ---------- CRUD Functions ---------- */

// CREATE USER
const createUser = (name, email, password) => {
  const data = readFile();

  const newUser = {
    id: Date.now(), // auto-generate id
    name,
    email,
    password
  };

  data.userData.push(newUser);
  writeFile(data);

  console.log("User created:", newUser);
};

// GET ALL USERS
const getAllUser = () => {
  const data = readFile();
  console.log("All Users:", data.userData);
};

// GET USER BY ID
const getByid = (id) => {
  const data = readFile();
  const user = data.userData.find(u => u.id === id);

  if (!user) {
    console.log("User not found");
    return;
  }

  console.log("User found:", user);
};

// UPDATE USER
const UpdateUser = (id, name, email, password) => {
  const data = readFile();
  const index = data.userData.findIndex(u => u.id === id);

  if (index === -1) {
    console.log("User not found");
    return;
  }

  data.userData[index] = {
    ...data.userData[index],
    name,
    email,
    password
  };

  writeFile(data);
  console.log("User updated:", data.userData[index]);
};

// DELETE USER
const deleteUser = (id) => {
  const data = readFile();
  const newUsers = data.userData.filter(u => u.id !== id);

  if (newUsers.length === data.userData.length) {
    console.log("User not found");
    return;
  }

  data.userData = newUsers;
  writeFile(data);

  console.log("User deleted successfully");
};

/* ---------- EXPORT (optional) ---------- */
module.exports = {
  createUser,
  getAllUser,
  getByid,
  UpdateUser,
  deleteUser
};



// createUser("kml","kml@gmail.com","pass123")
// createUser("Akshit", "akshit@gmail.com", "12345");
getAllUser()
// getByid(1765953441015)
// UpdateUser(1765953441015,"akishit","Akshit@gmail.com","4321")
// deleteUser(1765953441015)  
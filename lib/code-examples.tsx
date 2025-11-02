"use client";

export const CODE_EXAMPLES = {
  typescript: {
    name: "TypeScript React",
    extension: "tsx",
    code: `import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface User {
  id: number
  name: string
  email: string
}

const UserDashboard = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <ul className="space-y-2">
              {filteredUsers.map(user => (
                <li key={user.id} className="p-3 border rounded">
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}`,
  },
  javascript: {
    name: "JavaScript",
    extension: "js",
    code: `const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database connection
const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
]

// Routes
app.get('/api/users', (req, res) => {
  res.json(users)
})

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json(user)
})

app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  }
  users.push(newUser)
  res.status(201).json(newUser)
})

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`)
})`,
  },
  python: {
    name: "Python",
    extension: "py",
    code: `from flask import Flask, jsonify, request
from dataclasses import dataclass
from typing import List
import sqlite3

app = Flask(__name__)

@dataclass
class User:
    id: int
    name: str
    email: str

class UserRepository:
    def __init__(self, db_path: str):
        self.db_path = db_path
        self.init_db()
    
    def init_db(self):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL
            )
        ''')
        conn.commit()
        conn.close()
    
    def get_all_users(self) -> List[User]:
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute('SELECT id, name, email FROM users')
        users = [User(*row) for row in cursor.fetchall()]
        conn.close()
        return users
    
    def create_user(self, name: str, email: str) -> User:
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute('INSERT INTO users (name, email) VALUES (?, ?)', (name, email))
        user_id = cursor.lastrowid
        conn.commit()
        conn.close()
        return User(user_id, name, email)

repo = UserRepository('users.db')

@app.route('/api/users', methods=['GET'])
def get_users():
    users = repo.get_all_users()
    return jsonify([{'id': u.id, 'name': u.name, 'email': u.email} for u in users])

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = repo.create_user(data['name'], data['email'])
    return jsonify({'id': user.id, 'name': user.name, 'email': user.email}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)`,
  },
  java: {
    name: "Java",
    extension: "java",
    code: `package com.example.userservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}

class User {
    private Long id;
    private String name;
    private String email;

    public User(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}

@RestController
@RequestMapping("/api/users")
class UserController {
    private List<User> users = new ArrayList<>();
    private Long nextId = 1L;

    public UserController() {
        users.add(new User(nextId++, "Alice Johnson", "alice@example.com"));
        users.add(new User(nextId++, "Bob Smith", "bob@example.com"));
    }

    @GetMapping
    public List<User> getAllUsers() {
        return users;
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return users.stream()
                .filter(user -> user.getId().equals(id))
                .findFirst();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        user.setId(nextId++);
        users.add(user);
        return user;
    }
}`,
  },
  go: {
    name: "Go",
    extension: "go",
    code: `package main

import (
    "encoding/json"
    "log"
    "net/http"
    "strconv"
    "sync"
    "github.com/gorilla/mux"
)

type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

type UserStore struct {
    mu     sync.RWMutex
    users  map[int]User
    nextID int
}

func NewUserStore() *UserStore {
    return &UserStore{
        users:  make(map[int]User),
        nextID: 1,
    }
}

func (s *UserStore) GetAll() []User {
    s.mu.RLock()
    defer s.mu.RUnlock()
    
    users := make([]User, 0, len(s.users))
    for _, user := range s.users {
        users = append(users, user)
    }
    return users
}

func (s *UserStore) Create(name, email string) User {
    s.mu.Lock()
    defer s.mu.Unlock()
    
    user := User{
        ID:    s.nextID,
        Name:  name,
        Email: email,
    }
    s.users[s.nextID] = user
    s.nextID++
    return user
}

func main() {
    store := NewUserStore()
    store.Create("Alice Johnson", "alice@example.com")
    store.Create("Bob Smith", "bob@example.com")
    
    r := mux.NewRouter()
    
    r.HandleFunc("/api/users", func(w http.ResponseWriter, r *http.Request) {
        users := store.GetAll()
        json.NewEncoder(w).Encode(users)
    }).Methods("GET")
    
    r.HandleFunc("/api/users", func(w http.ResponseWriter, r *http.Request) {
        var req struct {
            Name  string \`json:"name"\`
            Email string \`json:"email"\`
        }
        json.NewDecoder(r.Body).Decode(&req)
        user := store.Create(req.Name, req.Email)
        w.WriteHeader(http.StatusCreated)
        json.NewEncoder(w).Encode(user)
    }).Methods("POST")
    
    log.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}`,
  },
  rust: {
    name: "Rust",
    extension: "rs",
    code: `use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use serde::{Deserialize, Serialize};
use std::sync::Mutex;

#[derive(Debug, Clone, Serialize, Deserialize)]
struct User {
    id: u32,
    name: String,
    email: String,
}

#[derive(Deserialize)]
struct CreateUserRequest {
    name: String,
    email: String,
}

struct AppState {
    users: Mutex<Vec<User>>,
    next_id: Mutex<u32>,
}

async fn get_users(data: web::Data<AppState>) -> impl Responder {
    let users = data.users.lock().unwrap();
    HttpResponse::Ok().json(&*users)
}

async fn create_user(
    data: web::Data<AppState>,
    req: web::Json<CreateUserRequest>,
) -> impl Responder {
    let mut users = data.users.lock().unwrap();
    let mut next_id = data.next_id.lock().unwrap();
    
    let user = User {
        id: *next_id,
        name: req.name.clone(),
        email: req.email.clone(),
    };
    
    *next_id += 1;
    users.push(user.clone());
    
    HttpResponse::Created().json(user)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let app_state = web::Data::new(AppState {
        users: Mutex::new(vec![
            User {
                id: 1,
                name: "Alice Johnson".to_string(),
                email: "alice@example.com".to_string(),
            },
            User {
                id: 2,
                name: "Bob Smith".to_string(),
                email: "bob@example.com".to_string(),
            },
        ]),
        next_id: Mutex::new(3),
    });

    println!("Server running at http://localhost:8080");

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .route("/api/users", web::get().to(get_users))
            .route("/api/users", web::post().to(create_user))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}`,
  },
  php: {
    name: "PHP",
    extension: "php",
    code: `<?php

namespace App\\Controllers;

use PDO;
use PDOException;

class User {
    public int $id;
    public string $name;
    public string $email;

    public function __construct(int $id, string $name, string $email) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
    }
}

class UserRepository {
    private PDO $db;

    public function __construct(string $dsn, string $username, string $password) {
        try {
            $this->db = new PDO($dsn, $username, $password);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->initDatabase();
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }

    private function initDatabase(): void {
        $sql = "CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        )";
        $this->db->exec($sql);
    }

    public function getAllUsers(): array {
        $stmt = $this->db->query("SELECT * FROM users");
        $users = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $users[] = new User($row['id'], $row['name'], $row['email']);
        }
        return $users;
    }

    public function createUser(string $name, string $email): User {
        $stmt = $this->db->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
        $stmt->execute([$name, $email]);
        $id = (int)$this->db->lastInsertId();
        return new User($id, $name, $email);
    }

    public function getUserById(int $id): ?User {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($row) {
            return new User($row['id'], $row['name'], $row['email']);
        }
        return null;
    }
}

// API Routes
header('Content-Type: application/json');

$repo = new UserRepository('mysql:host=localhost;dbname=myapp', 'root', 'password');

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($path === '/api/users' && $method === 'GET') {
    $users = $repo->getAllUsers();
    echo json_encode($users);
} elseif ($path === '/api/users' && $method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $user = $repo->createUser($data['name'], $data['email']);
    http_response_code(201);
    echo json_encode($user);
}`,
  },
  ruby: {
    name: "Ruby",
    extension: "rb",
    code: `require 'sinatra'
require 'json'
require 'sqlite3'

class User
  attr_accessor :id, :name, :email

  def initialize(id, name, email)
    @id = id
    @name = name
    @email = email
  end

  def to_json(*args)
    {
      id: @id,
      name: @name,
      email: @email
    }.to_json(*args)
  end
end

class UserRepository
  def initialize(db_path)
    @db = SQLite3::Database.new(db_path)
    init_database
  end

  def init_database
    @db.execute <<-SQL
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
      )
    SQL
  end

  def get_all_users
    rows = @db.execute('SELECT id, name, email FROM users')
    rows.map { |row| User.new(*row) }
  end

  def create_user(name, email)
    @db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email])
    id = @db.last_insert_row_id
    User.new(id, name, email)
  end

  def get_user_by_id(id)
    row = @db.get_first_row('SELECT id, name, email FROM users WHERE id = ?', [id])
    row ? User.new(*row) : nil
  end
end

# Initialize repository
repo = UserRepository.new('users.db')

# Seed data if empty
if repo.get_all_users.empty?
  repo.create_user('Alice Johnson', 'alice@example.com')
  repo.create_user('Bob Smith', 'bob@example.com')
end

# Routes
get '/api/users' do
  content_type :json
  users = repo.get_all_users
  users.to_json
end

get '/api/users/:id' do
  content_type :json
  user = repo.get_user_by_id(params[:id].to_i)
  if user
    user.to_json
  else
    status 404
    { error: 'User not found' }.to_json
  end
end

post '/api/users' do
  content_type :json
  data = JSON.parse(request.body.read)
  user = repo.create_user(data['name'], data['email'])
  status 201
  user.to_json
end`,
  },
  csharp: {
    name: "C#",
    extension: "cs",
    code: `using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("UsersDb"));
builder.Services.AddControllers();

var app = builder.Build();
app.MapControllers();
app.Run();

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<User> Users { get; set; }
}

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;

    public UsersController(AppDbContext context)
    {
        _context = context;
        
        // Seed data
        if (!_context.Users.Any())
        {
            _context.Users.AddRange(
                new User { Name = "Alice Johnson", Email = "alice@example.com" },
                new User { Name = "Bob Smith", Email = "bob@example.com" }
            );
            _context.SaveChanges();
        }
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await _context.Users.FindAsync(id);
        
        if (user == null)
        {
            return NotFound();
        }
        
        return user;
    }

    [HttpPost]
    public async Task<ActionResult<User>> CreateUser(User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
}`,
  },
  swift: {
    name: "Swift",
    extension: "swift",
    code: `import Foundation
import Vapor

struct User: Content {
    var id: Int?
    var name: String
    var email: String
}

class UserStore {
    private var users: [User] = []
    private var nextId = 1
    private let lock = NSLock()
    
    init() {
        users = [
            User(id: nextId, name: "Alice Johnson", email: "alice@example.com"),
            User(id: nextId + 1, name: "Bob Smith", email: "bob@example.com")
        ]
        nextId = 3
    }
    
    func getAll() -> [User] {
        lock.lock()
        defer { lock.unlock() }
        return users
    }
    
    func create(name: String, email: String) -> User {
        lock.lock()
        defer { lock.unlock() }
        
        let user = User(id: nextId, name: name, email: email)
        users.append(user)
        nextId += 1
        return user
    }
    
    func getById(_ id: Int) -> User? {
        lock.lock()
        defer { lock.unlock() }
        return users.first { $0.id == id }
    }
}

func routes(_ app: Application, store: UserStore) throws {
    app.get("api", "users") { req -> [User] in
        return store.getAll()
    }
    
    app.get("api", "users", ":id") { req -> User in
        guard let id = req.parameters.get("id", as: Int.self),
              let user = store.getById(id) else {
            throw Abort(.notFound)
        }
        return user
    }
    
    app.post("api", "users") { req -> User in
        let createRequest = try req.content.decode(User.self)
        return store.create(name: createRequest.name, email: createRequest.email)
    }
}

@main
struct UserServiceApp {
    static func main() throws {
        let app = Application()
        defer { app.shutdown() }
        
        let store = UserStore()
        try routes(app, store: store)
        
        try app.run()
    }
}`,
  },
  kotlin: {
    name: "Kotlin",
    extension: "kt",
    code: `package com.example.userservice

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.request.*
import io.ktor.http.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import java.util.concurrent.atomic.AtomicInteger

@Serializable
data class User(
    val id: Int,
    val name: String,
    val email: String
)

@Serializable
data class CreateUserRequest(
    val name: String,
    val email: String
)

class UserStore {
    private val users = mutableListOf<User>()
    private val nextId = AtomicInteger(1)
    
    init {
        users.add(User(nextId.getAndIncrement(), "Alice Johnson", "alice@example.com"))
        users.add(User(nextId.getAndIncrement(), "Bob Smith", "bob@example.com"))
    }
    
    fun getAll(): List<User> = users.toList()
    
    fun create(name: String, email: String): User {
        val user = User(nextId.getAndIncrement(), name, email)
        users.add(user)
        return user
    }
    
    fun getById(id: Int): User? = users.find { it.id == id }
}

fun main() {
    val store = UserStore()
    
    embeddedServer(Netty, port = 8080) {
        routing {
            get("/api/users") {
                call.respond(store.getAll())
            }
            
            get("/api/users/{id}") {
                val id = call.parameters["id"]?.toIntOrNull()
                if (id == null) {
                    call.respond(HttpStatusCode.BadRequest, "Invalid ID")
                    return@get
                }
                
                val user = store.getById(id)
                if (user == null) {
                    call.respond(HttpStatusCode.NotFound, "User not found")
                } else {
                    call.respond(user)
                }
            }
            
            post("/api/users") {
                val request = call.receive<CreateUserRequest>()
                val user = store.create(request.name, request.email)
                call.respond(HttpStatusCode.Created, user)
            }
        }
    }.start(wait = true)
}`,
  },
};

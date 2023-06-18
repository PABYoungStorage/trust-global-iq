export default function Login() {
  return (
    <>
      <div className="admin-login">
        <div className="login-box">
          <h2>Admin Login</h2>
          <form action="/admin/login" method="post">
            <div className="user-box">
              <input type="text" name="username" required />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <button className="submit" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

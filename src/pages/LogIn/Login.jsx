import React from "react";



function LogIn() {
    return (
        <>
          <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '400px' }}>
        <h3 className="mb-4 text-center">Login</h3>
        <form
        //  onSubmit={handleSubmit}
         >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
            //   value={formData.email}
            //   onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
            //   value={formData.password}
            //   onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>

          <div className="mb-3"> 
          <p className="m-0 text-secondary text-center">Don't have an account? <a href="/" className="link-primary text-decoration-none">Sign Up</a></p>

          </div>
        </form>
      </div>
    </div>
        </>
    )
}

export default LogIn;
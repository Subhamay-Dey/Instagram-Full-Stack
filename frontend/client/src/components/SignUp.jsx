import React from 'react'

const SignUp = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center">Instagram</h1>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Forgot your password?</p>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-gray-600">Don't have an account? </p>
          <a href="#" className="text-indigo-500 font-semibold">
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
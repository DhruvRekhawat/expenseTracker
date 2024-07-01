import React from 'react'
import LoginForm from '../components/molecules/loginForm'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/card'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-4 mt-16">
    <h1 className="text-4xl font-bold">Login</h1>
    <p>Enter your email to login</p>
     <Card className="w-1/3">
      <CardHeader>
        <CardTitle>
          Hello User
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm></LoginForm>
      </CardContent>
      <CardFooter>
        <Link to={"/register"}><u>New here? Create an Account</u></Link>
      </CardFooter>
     </Card>

    </main>
  )
}

export default Login
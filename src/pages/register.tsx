import React from 'react'
import RegisterForm from '../components/molecules/registerForm'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

const Register = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-4 mt-16">
    <h1 className="text-4xl font-bold ">Register</h1>
    <p>Enter your email to login</p>
     <Card className="w-1/3">
      <CardHeader>
        <CardTitle>
          Hello User
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm></RegisterForm>
      </CardContent>
     </Card>
    </main>
  )
}

export default Register
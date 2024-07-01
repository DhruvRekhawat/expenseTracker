import React, { useEffect } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { DataTable } from '../components/ui/transactionsDataTable'
import {signOut} from 'firebase/auth'
import { collection,getDocs, query, where } from 'firebase/firestore'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import TransactionForm from '../components/molecules/transactionForm'
import { auth } from '../lib/firebase'
import { useNavigate } from 'react-router-dom'
import { db } from '../lib/firebase'
import { useState } from 'react'
import { columns } from '../components/ui/transactionsColumns'
import { useStore } from '../store'

const Home = () => {
const navigate = useNavigate()
const {loggedIn,logOut} = useStore()
const [transactionList,SetTransactionList] = useState([{
      amount: "",
      description: "",
      title: "",
      transactionType: "",
      uid:""            
 }])
      

          async function signout(){
                  logOut()
                  signOut(auth).then(
                    ()=>navigate('/login')
                  )
              }
     
      

    useEffect(()=>{

      if(!loggedIn){
        navigate('/login')

      }

      const getData= async() => {
        const querySnapshot = await getDocs(query(collection(db, "transactions"),where("uid","==",auth.currentUser?.uid)));
        let list:any = []
        
        querySnapshot.forEach((doc) => {
           
          list.push(doc.data())
          
        }
      )
      SetTransactionList(list)
      }
      getData()
      console.log(transactionList)
    },[])





  return (
    <>
        <h1> Expense Tracker </h1>
        <Button onClick={signout}>Sign Out</Button>
      
  <Dialog>
  <DialogTrigger><Button> New Transaction </Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle> Add Transaction </DialogTitle>
      <DialogDescription>
        Manage your finances, keep updating your transactions
      </DialogDescription>
    </DialogHeader>
    <TransactionForm></TransactionForm>
  </DialogContent>
</Dialog>


<DataTable columns={columns} data={transactionList}></DataTable>
        
    </>
  )
}

export default Home
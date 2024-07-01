import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { RadioGroup,RadioGroupItem } from "../ui/radio-group"
import { auth,db } from "../../lib/firebase"


import { useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"; 

const numberRegex = new RegExp("^\d+$") 

const formSchema = z.object({
    title: z.string().min(2,{
        message: "Minimum 2 characters required"
    }),
    description: z.string().optional(),
    amount: z.string(),
    transactionType: z.string(),

})


const TransactionForm = () => {

    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title:"",
          description:"",
          amount:"",
          transactionType:"",
        },
      })

      async function onSubmit(values: z.infer<typeof formSchema>) {
       console.log(values,auth.currentUser)
       const docRef = await addDoc(collection(db, "transactions"), {
        uid: auth.currentUser?.uid,
        title: values.title,
        description: values.description,
        amount: values.amount,
        transactionType: values.transactionType
      });
      


      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="transactionType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Transaction Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Income" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Income
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Expense" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Expense
                    </FormLabel>
                  </FormItem>
                  
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  
  )
}

export default TransactionForm
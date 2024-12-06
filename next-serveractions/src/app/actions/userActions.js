'use server'
import { redirect } from "next/navigation"

export async function createUser(formData) {
    console.log('Server actions', formData)
    //db operation here it can go ;  you can use prisma over here

    //    return { success: true, message: 'Data Saved successfully' }
   // redirect('/success')
   
  redirect(`/success?name=${encodeURIComponent(formData.get("name"))}&email=${encodeURIComponent(formData.get("email"))}`);
}
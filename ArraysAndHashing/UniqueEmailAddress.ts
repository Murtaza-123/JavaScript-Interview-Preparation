const uniqueEmailAddress = (emails:string[])=>
{
    const uniqueEmail:string[] = []
	emails.forEach((emails)=>
	{
          const part = emails.split("@")
		  part[0] = part[0].replace(/\./g, "")
		  if(part[0].indexOf("+") !== -1)
		  {
			  part[0] = part[0].substring(0 , part[0].indexOf("+"))
		  }
		  const cleanEmail = part.join("@")
		  if(uniqueEmail.indexOf(cleanEmail) === -1)
		  {
			uniqueEmail.push(cleanEmail)
		  }
	})
	return uniqueEmail.length
}

let uniqueEmails = ["alice.z+@leetcode.com"]
uniqueEmailAddress(uniqueEmails)
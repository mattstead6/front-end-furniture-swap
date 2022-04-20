import React, {useState, useEffect} from 'react'

function UserItemPage() {

  const [userItems, setUserItem] = useState([])

  useEffect(() => {
     fetch('http://localhost:9292/users')
     .then(res => res.JSON)
     .then(userItemsData => console.log(userItemsData.items))
  },[])

  return (
    <div>Hello</div>
  )
}

export default UserItemPage

//Need to fetch with 
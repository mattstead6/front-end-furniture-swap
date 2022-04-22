import React from 'react'
import './UserProfileModal.css'

function UserProfileModal({userItems}) {

    console.log(userItems)
  return (
      <>
          <div className='modal'> 
        <form className="editProfilForm">
            <label>Name:
            <br />
            <input className="user-info-input-box" type="text" name="full_name" placeholder={userItems.full_name} />
            </label>
            <br />

            <label>Bio:
            <br />
            <input className="user-info-input-box" type="text" name="bio" placeholder={userItems.bio}/>
            </label>
            <br />

            <label>Location:
            <br />
            <input className="user-info-input-box" type="text" name="location" placeholder={userItems.location}/>
            </label>
            <br />

            <label>Image:
            <br />
            <input className="user-info-input-box" type="text" name="image_url" placeholder="Upload New Image"/>
            </label>
            <br />

            <input
                className="submitPorfileButton"
                type="submit"
                name="submit"
                value="Submit Changes"
        />
        </form>
    </div>
      </>

  )
}

export default UserProfileModal
import React, {useEffect} from 'react';
import Axios from 'axios';

const Users = () =>
{

    useEffect(()=>
    {
        getUser();
    })

    const getUser = async ()=>
    {
        const res = await Axios.get('http://socialcodia.net/SocialApiFriendsSystemVideoThumb/public/users',
        {
            headers:{
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzb2NpYWxjb2RpYS5uZXQiLCJpYXQiOjE2MDA4MDg5OTcsInVzZXJfaWQiOjE5MH0.2IECi1S6nz1EB0jh7M0zFMo1LcI58qEAV61jRGfypGk'
            }
        });
        console.log(res);
    }

    return(
        <div className="socialcodia">
            <h1>Users Page</h1>
         </div>
         )
}

export default Users;
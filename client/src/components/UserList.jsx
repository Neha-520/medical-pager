import React, { useState, useEffect } from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

import { InviteIcon } from '../assets'

const ListContainer = ({ children }) => {
    return (
        <div className='user-list__container'>
            <div className='user-list__header'>
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}

const UserItem = () => {
    return (
        <div className='user-item__wrapper'>
            <div className='user-item__name-wrapper'>
                <Avatar />
            </div>
        </div>)
}

const UserList = () => {
    const { client } = useChatContext();
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [listEmpty, setListEmpty] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            if (loading) return;
            setLoading(true);

            try {
                const res = await client.queryUsers(
                    { id: { $ne: client.userID } },
                    { id: 1 }, //to sort
                    { limit: 8 } //only 8 users
                )
                if (res.users.length) setUsers(res.users);
                else setListEmpty(true);
            } catch (err) {
                console.log(err);
            }
        }
        setLoading(false);

        if (client) getUsers();
    }, [])
    return (
        <ListContainer>

        </ListContainer>
    )
}

export default UserList
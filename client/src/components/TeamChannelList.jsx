import React from 'react'

import {AddChannel} from '../assets'

const TeamChannelList = ({children,error=false,loading,type}) => {
    if(error) {
        return type === 'team' ?(
       <div className='team-channel-list'>
          <p className='team-channel-list__message'> Connection Error,please wait a moment and try again</p>
       </div>
    ) : null;
}
if(loading){
    return(
        <div className='team-channel-list'>
           <p className='team-channel-list__message loading'>

           </p>
       </div>
    )
}
    return (
        <div>
            
        </div>
    )
}

export default TeamChannelList

import React, {useState} from 'react';

import Sender from '/Users/talalbazerbachi/Documents/GitHub/Project-341/src/components/Sender.js';
import Messages from '/Users/talalbazerbachi/Documents/GitHub/Project-341/src/components/Messages.js';

export const Main = () => {
     return (
         <div className='main__layout' > 
            <LeftSection></LeftSection>
            <RightSection></RightSection>
         </div>
     );
};

const LeftSection = () => {
    return(
        <div className="main__layout--leftPannel">
            <UserInfoSection></UserInfoSection>
            <ChannelSection></ChannelSection>
            <PersonnalChatSection></PersonnalChatSection>
        </div>
    );
};

const RightSection = () => {
    return(
        <div className="main__layout--rightPannel">
            <SearchSection></SearchSection>
            <MessageBoardSection></MessageBoardSection>
            <UserInputSection></UserInputSection>
        </div>
    );
};

const UserInputSection = () => {
    return(
        <div className="main__layout--input">
            user input SECTION
            <Sender />
            {/* ADD YOU CODE IN THIS SECTION */}
        </div>
    );
};

const MessageBoardSection = () => {
    return(
        <div className="main__layout--board">
            messages SECTION
            <Messages />
            
            {/* ADD YOU CODE IN THIS SECTION */}
        </div>
    );
};

const SearchSection = () => {
    return(
        <div className="main__layout--search">
            Search SECTION
            {/* ADD YOU CODE IN THIS SECTION */}
        </div>
    );
};

const UserInfoSection = () => {
    return(
        <div className="main__layout--userInfo">
            User Info SECTION
            {/* ADD YOU CODE IN THIS SECTION */}
        </div>
    );
};

const ChannelSection = () => {
    return(
        <div className="main__layout--channels">
            Channels SECTION
            {/* ADD YOU CODE IN THIS SECTION */}
        </div>
    );
};

const PersonnalChatSection = () => {
    return(
        <div className="main__layout--chat">
            Personnal Chat SECTION
            {/* ADD YOU CODE IN THIS SECTION */}
        </div>
    );
};
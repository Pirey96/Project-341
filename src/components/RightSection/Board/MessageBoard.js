import React, {useState} from 'react';
import './../../../App.css';
import './../../Main.css';
import moment from 'moment';
import { UserIcon, PenIcon } from './../../shared/Icon';


export const MessageBoard = () => {
    const currentUser = "Alex";
    const date = new Date()
    const date2 = new Date('1995-12-17T03:24:00');
    const messages = [
        {
            id: 1,
            text: "test TEXT 1",
            time: date,
            username: 'Alex'
        },
        {
            id: 2,
            text: "test TEXT 2",
            time: date2,
            username: 'Alex'
        },
    ];

    return(
        <MessageSection messages={messages} />
    );
};


const MessageSection = (props) => {
    const messages = props.messages;
    const firstMessage = props.messages[0]

    let lastUser = '';
    let lastTime = firstMessage.time;

    const isDifferentUser = (LastMessageUser) => { 
        if(lastUser !== LastMessageUser) {
            return true;
        }
        return false;
    }

    const isLongDelay = (lastMessageTime) => {
        const now = moment(lastTime);
        const end = moment(lastMessageTime);

        const duration = moment.duration(now.diff(end)).asHours();

        if (props.messages[0].time === lastMessageTime) {
            return true;
        }
        //Decided for 2hours for particular reason
        if (duration > 2) {
            return true;
        }
        return false;
    }

    const setNewValue = (message) => {
        lastTime = message.time;
        lastUser = message.username;
    }
    
    return(
        <React.Fragment>
            <FirstMessage />
            {messages.map(message => 
                <li key={message.id}>
                    {isLongDelay(message.time) ? <TimeSeperator time={message.time} /> : null}
                    {isDifferentUser(message.username) || isLongDelay(message.time) ? 
                        <MessageHeader 
                        date={message.time} 
                        username={message.username} 
                        message={message.text}
                        /> : 
                        <SimpleMessage time={message.time} message={message.text} />
                    }
                    {setNewValue(message)}
                </li>
            )}
        </React.Fragment>
    );
};

const  UserAvatar = (props) => {
    const getFirstUserInitial = props.username.charAt(0);
    return (
        <div className="user-message-avatar">
            <span className="user-message-initial">{getFirstUserInitial}</span>
        </div>
    );
}

const ChatUserName = (props) => {
    return(
        <div className="">
            <span className="user-message-username">
                {props.username} 
                <span className="user-message-timestamp">
                {formatTime(props.time)}
                </span>
            </span>
        </div>
    );
}

const MessageHeader = (props) => {
    return (
        <div className="message-container">
            <UserAvatar username={props.username}/>
            <div className="message-header-container">
                <ChatUserName username={props.username} time={props.date}/>
                <span className="user-message">{props.message}</span>
            </div>
        </div>
    );
}

const formatTime = (time) => {
    return moment(time).format("LT")
}

const UserMessages = (props) => {
    return(
        <div className="user-message">
            <SimpleMessage time={props.time} message={props.message}/>
        </div>
    );
}

const SimpleMessage = (props) => {
    return(
        <div className="simple-message__container">
            <span className="simple-message__date">{formatTime(props.time)}</span>
            <span className="simple-message__text"> {props.message} </span>
        </div>
    );
}


const FirstMessage = (props) => {
    return(
        <div className="message-foreword">
            <span className="foreword-title">test1234</span>
            <span className="foreword-description">You created this channel on {props.creationDate}. This is the very beginning of the <b>{props.channelName}</b> channel.</span>
            <span className="foreword-buttons-container">
                <ForeWordButton label={"Set a description"} icon={<PenIcon />}/> 
                <ForeWordButton label={"Add an app"} isDisabled={true} icon={'+'}/> 
                <ForeWordButton label={"Add people to this channel"} icon={<UserIcon />}/> 
            </span>
        </div>
    );
}

const ForeWordButton = (props) => {
    return(
        <div className={props.isDisabled ? "foreword-buttons disabled" : "foreword-buttons enabled"}>
            <span className="foreword-icon">{props.icon}</span>{props.label} 
        </div>
    )
}

const TimeSeperator = (props) => {
    const dayString = moment(props.time).format("dddd, MMMM Do");

    return(
        <div className="time-seperator-container">
            <div className="time-separator-line">
            </div>
            <span className="time-separator-date">
                {`${dayString}`}
            </span>
            <div className="time-separator-line">
            </div>
        </div>
    );
}

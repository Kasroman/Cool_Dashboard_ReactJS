import React from 'react';
import { UpdatesData } from '../../Data/Data';
import './updates.css';

const Updates = () => {
    return (
        <div className="updates">
            {UpdatesData.map((update) => {
                return (
                    <div className="update">
                        <img src={update.img} alt="" />
                        <div className="noti">
                            <div
                            style={{
                                marginBot: '0.5rem'
                            }}
                            >
                                <span>{update.name} </span>
                                <span>{update.noti}</span>   
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Updates;
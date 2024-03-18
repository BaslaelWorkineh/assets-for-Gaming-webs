import React from 'react';
import './cardTwo.css';

function Card({ cardData }) {
    return (
        <div className='cardContainer'>
            <div className='cardTop'>
                {cardData.cardTop.map((item, index) => (
                    <h3 key={index}>{item}</h3>
                ))}
            </div>
            <div className='cardBottom'>
                <p>{cardData.cardBottom.gameName}</p>
                <h2>{cardData.cardBottom.gameDetails}</h2>
                <div className='logoAndHost'>
                    <img src={cardData.cardBottom.logoAndHost.logoUrl} alt="Logo" />
                    <div>
                        <p>{cardData.cardBottom.logoAndHost.hostedByLabel}</p>
                        <p>{cardData.cardBottom.logoAndHost.hostedBy}</p>
                    </div>
                    <p>{cardData.cardBottom.logoAndHost.freeEntry}</p>
                </div>
                <div className='cardFooter'>
                    {cardData.cardBottom.cardFooter.map((item, index) => (
                        <div key={index} className={`cardFooter${index === 0 ? 'First' : 'Second'}`}>
                            <img src={item.logoUrl} alt="Logo"  style={{transform:'skewX(20deg)', width:'20px',height:'20px'}}/>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CardTwo() {
    // Define card data for each card
    const cardData1 = {
        cardTop: ['64/64', '1v1'],
        cardBottom: {
            gameName: 'Clash of Clans',
            gameDetails: '15$-TH 9 -1VS1 Mar 18',
            logoAndHost: {
                logoUrl: 'https://cdn1.epicgames.com/ue/item/LowPolyStylizedEnvironment_Screenshot_1-1920x1080-8df4e79cb034ee271f254f8959518966.png',
                hostedBy: 'RamboosR',
                hostedByLabel: 'Hosted BY',
                freeEntry: 'Free Entry'
            },
            cardFooter: [
                { logoUrl: 'https://cdn1.epicgames.com/ue/item/LowPolyStylizedEnvironment_Screenshot_1-1920x1080-8df4e79cb034ee271f254f8959518966.png', description: 'Mar 18,6:00PM' },
                { logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dollar_Sign.svg/500px-Dollar_Sign.svg.png', description: '15USD' }
            ]
        }
    };

    const cardData2 = {
        cardTop: ['32/64', '2v2'],
        cardBottom: {
            gameName: 'Fortnite',
            gameDetails: '20$-TH 10 -2VS2 Mar 20',
            logoAndHost: {
                logoUrl: 'https://cdn1.epicgames.com/ue/item/LowPolyStylizedEnvironment_Screenshot_1-1920x1080-8df4e79cb034ee271f254f8959518966.png',
                hostedBy: 'JohnDoe',
                hostedByLabel: 'Hosted BY',
                freeEntry: 'Paid Entry'
            },
            cardFooter: [
                { logoUrl: 'https://cdn1.epicgames.com/ue/item/LowPolyStylizedEnvironment_Screenshot_1-1920x1080-8df4e79cb034ee271f254f8959518966.png', description: 'Mar 20,7:00PM' },
                { logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dollar_Sign.svg/500px-Dollar_Sign.svg.png', description: '20USD' }
            ]
        }
    };

    const cardData3 = {
        cardTop: ['48/64', '3v3'],
        cardBottom: {
            gameName: 'Apex Legends',
            gameDetails: '10$-TH 8 -3VS3 Mar 22',
            logoAndHost: {
                logoUrl: 'https://cdn1.epicgames.com/ue/item/LowPolyStylizedEnvironment_Screenshot_1-1920x1080-8df4e79cb034ee271f254f8959518966.png',
                hostedBy: 'JaneDoe',
                hostedByLabel: 'Hosted BY',
                freeEntry: 'Free Entry'
            },
            cardFooter: [
                { logoUrl: 'https://cdn1.epicgames.com/ue/item/LowPolyStylizedEnvironment_Screenshot_1-1920x1080-8df4e79cb034ee271f254f8959518966.png', description: 'Mar 22,8:00PM' },
                { logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dollar_Sign.svg/500px-Dollar_Sign.svg.png', description: '10USD' }
            ]
        }
    };

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {/* First Card */}
            <Card cardData={cardData1} />
            
            {/* Second Card */}
            <Card cardData={cardData2} />

            {/* Third Card */}
            <Card cardData={cardData3} />
        </div>
    );
}

export default CardTwo;

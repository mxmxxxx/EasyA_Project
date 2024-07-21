import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { auth } from '../auth/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Layout, HeaderWrapper, SidebarWrapper, ContentWrapper } from '../Home';
import Web3 from 'web3';
import { contractAddress, contractAbi } from '../WalletConnection';

const people = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Software Engineer at Company XYZ',
      imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Product Manager at Company ABC',
      imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png',
    },
    {
        id: 3,
        name: 'Creator 3',
        description: 'Product Manager at Company ABC',
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png',
    },
    {
        id: 4,
        name: 'Creator 4',
        description: 'Product Manager at Company ABC',
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png',
    },
    {
        id: 5,
        name: 'Creator 5',
        description: 'Product Manager at Company ABC',
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png',
    },
    {
        id: 6,
        name: 'Creator 6',
        description: 'Product Manager at Company ABC',
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png',
    },
];

const PersonEntry = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 30px 0;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProfilePic = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
`;

const PersonName = styled.h3`   
    margin: 0px 0px 5px;
`;

const PersonDescription = styled.p`
    margin: 0;
    color: #555;
`;

const BuyKeyButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    background-color: green;
    font-size: 20px;
`;

const PersonItem = ({ person }) => {
    const [buttonText, setButtonText] = useState("Buy Key");
    // const [account, setAccount] = useState(null);
    const purchaseKey = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                // setAccount(accounts[0]);
                const contract = new web3.eth.Contract(contractAbi, contractAddress);
                await contract.methods.buyNewKey(person.name).call({ from: accounts[0] });
                setButtonText("Key Owned");
            } catch (error) {
                console.log('Failed to connect to MetaMask.');
            }
        }
    }
    return (
      <PersonEntry>
        <ProfilePic src={person.imageUrl} alt={person.name} />
        <div className="person-description" style={{ flex: 1 }}>
          <PersonName>{person.name}</PersonName>
          <PersonDescription>{person.description}</PersonDescription>
        </div>
        <BuyKeyButton onClick={purchaseKey}>{buttonText}</BuyKeyButton>
      </PersonEntry>
    );
};
  

function Subscription() {
  const [user] = useAuthState(auth);

  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>
        {!user ? (
          <h1>Please log in to see your account details</h1>
        ) : (
            <div>
            {people.map((person) => (
              <PersonItem key={person.id} person={person} />
            ))}
          </div>
        )}
      </ContentWrapper>
    </Layout>
  );
}

export default Subscription;
import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { auth } from '../auth/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Layout, HeaderWrapper, SidebarWrapper, ContentWrapper } from '../Home';

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

];

const PersonItem = ({ person }) => {
    return (
      <div className="person-item">
        <img className="profile-picture" src={person.imageUrl} alt={person.name} />
        <div className="person-description">
          <h3>{person.name}</h3>
          <p>{person.description}</p>
        </div>
      </div>
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
            <h2>Subscribed</h2>
            <CardGrid>
              <Cards
                title="Views"
                value="4,658"
                valueColor="green"
                percentageChange="+35.2%"
                percentageColor="green"
              />
              <Cards
                title="Followers"
                value="$420"
                valueColor="green"
                percentageChange="+5.2%"
                percentageColor="green"
              />
            </CardGrid>
            <Chart />
          </div>
        )}
      </ContentWrapper>
    </Layout>
  );
}

export default Subscription;
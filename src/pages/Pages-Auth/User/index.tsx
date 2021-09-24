import { useState } from 'react';
import { Form } from '@unform/web';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuthContext } from '../../../hooks/useAuth';

import { Sidebar } from '../../../components/Sidebar';
import { Input, TextArea } from '../../../components/UserComponnents/Input';

// import ImageProfile from '../../../assets/images/User.svg';
import BackgroundImage from '../../../assets/images/Backgound.svg';

import './styles.scss';

export function User() {
  const { user } = useAuthContext();
  const [userProfile, setUserProfile] = useState(user);

  return (
    <Sidebar>
      <main className="UserMain">
        <div className="ContainerImageUser">
          <div className="imageBackground">
            <img src={BackgroundImage} alt="bg" />
          </div>
          <div className="UserImage">
            {userProfile?.avatar ? (
              <img src={userProfile.avatar} alt="Avatar" />
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </div>
          <h1>
            {userProfile?.first_name} {userProfile?.last_name}
          </h1>
          <h3>{userProfile?.role ? userProfile.role : 'Aluno'}</h3>
        </div>
        <section className="ContainerUser">
          <div className="TitleUser">
            <h1>Seus Dados</h1>
            <div className="line" />
          </div>
          {/* eslint-disable-next-line no-console */}
          <Form onSubmit={(e) => console.log(e)}>
            <div className="NameContainer">
              <Input
                label="Nome"
                name="firstName"
                value={userProfile?.first_name}
                onChange={(e) => {
                  if (userProfile) {
                    setUserProfile({
                      ...userProfile,
                      first_name: e.target.value,
                    });
                  }
                }}
              />
              <Input
                label="Sobrenome"
                name="lastName"
                value={userProfile?.last_name}
                onChange={(e) => {
                  if (userProfile) {
                    setUserProfile({
                      ...userProfile,
                      last_name: e.target.value,
                    });
                  }
                }}
              />
            </div>
            <div className="ContainerEmailAndNumberPhone">
              <Input
                label="Email"
                name="email"
                value={userProfile?.email}
                onChange={(e) => {
                  if (userProfile) {
                    setUserProfile({
                      ...userProfile,
                      email: e.target.value,
                    });
                  }
                }}
              />
              <Input label="Telefone" name="phone" />
            </div>
            <div className="description">
              <TextArea
                label="Biografia"
                name="description"
                value={userProfile?.description}
                onChange={(e) => {
                  if (userProfile) {
                    setUserProfile({
                      ...userProfile,
                      description: e.target.value,
                    });
                  }
                }}
              />
            </div>
          </Form>
        </section>
      </main>
    </Sidebar>
  );
}
